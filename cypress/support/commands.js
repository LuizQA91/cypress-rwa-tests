import { LOGIN_LOCATORS, TAB_LOCATORS, TRANSACTION_LOCATORS } from './locators';
import BankAccountsPage from '../pages/BankAccountsPage';
import TransactionPage from '../pages/TransactionPage';

// Realizar o login
Cypress.Commands.add('login', (username, password) => {
  cy.get(LOGIN_LOCATORS.USERNAME).clear().type(username);
  cy.get(LOGIN_LOCATORS.PASSWORD).clear().type(password, { log: false });
  cy.get('[data-test="signin-submit"]').click();
});

// Resetar a base de dados
Cypress.Commands.add('resetDb', () => {
  cy.env(['apiUrl']).then(({ apiUrl }) => {
    cy.request('POST', `${apiUrl}/testData/seed`);
  });
});

// Validar mensagem de erro
Cypress.Commands.add('errorMsg', () => {
  cy.get('[data-test="signin-error"]')
    .should('be.visible')
    .and('have.text', 'Username or password is invalid');
});

// Criar conta bancária
Cypress.Commands.add('createBankAccount', ({ bank }) => {
  BankAccountsPage.clickCreateNew()
    .fillBankName(bank.name)
    .fillRoutingNumber(bank.routingNumber)
    .fillAccountNumber(bank.accountNumber)
    .save();

  cy.get(BankAccountsPage.bankListItem)
    .contains(bank.name)
    .should('be.visible');
});

// Realizar pagamento
Cypress.Commands.add('makePayment', (amount, note) => {
  TransactionPage.clickNewTransaction();
  TransactionPage.selectFirstUser();
  TransactionPage.fillAmount(amount);
  TransactionPage.fillDescription(note);
  TransactionPage.clickPay();
  TransactionPage.validateSuccess(amount, note);
  TransactionPage.clickReturnToTransactions();
});

// Solicitar pagamento
Cypress.Commands.add('requestPayment', (amount, note) => {
  TransactionPage.clickNewTransaction();
  TransactionPage.selectFirstUser();
  TransactionPage.fillAmount(amount);
  TransactionPage.fillDescription(note);
  TransactionPage.clickRequest();
  TransactionPage.validateSuccess(amount, note);
  TransactionPage.clickReturnToTransactions();
});

// Validar transação
Cypress.Commands.add('validateTransaction', (amount, note) => {
  cy.get(TAB_LOCATORS.MINE).click();
  cy.get(TRANSACTION_LOCATORS.TRANSACTION_ITEM).first().then(($item) => {
    expect($item.text()).to.include(note);
    expect($item.text()).to.include(amount);
  });
});