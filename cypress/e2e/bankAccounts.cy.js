import LoginPage from '../pages/LoginPage';
import BankAccountsPage from '../pages/BankAccountsPage';

describe('Validação da tela Bank Accounts', () => {
    beforeEach(() => {
        LoginPage.login();
        BankAccountsPage.goToBankAccounts();
    });

    it('Cadastra uma nova conta bancária', () => {
        cy.fixture('banks').then((banksData) => {
            cy.createBankAccount(banksData);
        });
    });

    it('Exclui uma conta bancária', () => {
        cy.fixture('banks').then((banksData) => {
            const bankName = banksData.bank.name;
            cy.createBankAccount(banksData);

            BankAccountsPage.deleteBankAccountByName(bankName);

            cy.contains(bankName).then(($item) => {
                expect($item.text().trim()).to.contain('(Deleted)');
            });
        });
    });
});