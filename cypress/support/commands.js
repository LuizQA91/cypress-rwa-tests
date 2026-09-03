import BankAccountsPage from '../pages/BankAccountsPage';
import TransactionPage from '../pages/TransactionPage';
import OnboardingPage from '../pages/OnboardingPage';
import LoginPage from '../pages/LoginPage';

// Resetar a base de dados
Cypress.Commands.add('resetDb', () => {
  cy.env(['apiUrl']).then(({ apiUrl }) => {
    cy.request('POST', `${apiUrl}/testData/seed`);
  });
});

// Criar conta bancária
Cypress.Commands.add('createBankAccount', (bankData) => {
  BankAccountsPage.clickCreateNew()
    .fillBankName(bankData.name)
    .fillRoutingNumber(bankData.routingNumber)
    .fillAccountNumber(bankData.accountNumber)
    .save();

  cy.get(BankAccountsPage.bankListItem)
    .contains(bankData.name)
    .should('be.visible');
});

// Realizar pagamento
Cypress.Commands.add('makePayment', (amount, note) => {
  TransactionPage.clickNewTransaction()
    .selectFirstUser()
    .fillAmount(amount)
    .fillDescription(note)
    .clickPay()
    .validateSuccess(amount, note)
    .clickReturnToTransactions();
});

// Solicitar pagamento
Cypress.Commands.add('requestPayment', (amount, note) => {
  TransactionPage.clickNewTransaction()
    .selectFirstUser()
    .fillAmount(amount)
    .fillDescription(note)
    .clickRequest()
    .validateSuccess(amount, note)
    .clickReturnToTransactions();
});

// Cadastrar novo cliente
Cypress.Commands.add('createClient', (user, bank) => {
  OnboardingPage
    .visitSignInPage()
    .clickSignUpLink()
    .fillSignUpForm(user)
    .submitSignUp();

  LoginPage.login(user.username, user.password);

  OnboardingPage
    .clickNextOnboarding()
    .fillBankAccountForm(bank.bank1)
    .submitSaveBank()
    .clickDoneOnboarding()
    .validateFirstNameInSidenav(user.firstName);
});

