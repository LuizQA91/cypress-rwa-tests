import LoginPage from '../pages/LoginPage';
import BankAccountsPage from '../pages/BankAccountsPage';
import user from '../fixtures/users.json';
import banksData from '../fixtures/banks.json';

describe('Validação da tela Bank Accounts', () => {
    beforeEach(() => {
        cy.resetDb();
        LoginPage.login(user.validUser.username, user.validUser.password);
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