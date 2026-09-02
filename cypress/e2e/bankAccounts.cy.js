import LoginPage from '../pages/LoginPage';
import BankAccountsPage from '../pages/BankAccountsPage';
import banksData from '../fixtures/banks.json';

describe('Validação da Tela Bank Accounts', () => {
    beforeEach(() => {
        cy.resetDb();
        const { validUser } = Cypress.env('users');
        LoginPage
            .visit()
            .login(validUser.username, validUser.password)
        BankAccountsPage.goToBankAccounts();
    });

    it('Cadastra uma nova conta bancária', () => {
        cy.createBankAccount(banksData.bank1);
    });

    it('Exclui uma conta bancária', () => {
        const bankName = banksData.bank1.name;

        cy.createBankAccount(banksData.bank1);
        BankAccountsPage.deleteBankAccountByName(bankName);

        cy.contains(bankName).should('contain.text', '(Deleted)');
    });
});