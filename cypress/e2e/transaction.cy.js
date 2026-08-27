import LoginPage from '../pages/LoginPage';
import TransactionPage from '../pages/TransactionPage';
import user from '../fixtures/users.json';

describe('Fluxo de Transações', () => {
    beforeEach(() => {
        cy.resetDb();
        LoginPage.login(user.validUser.username, user.validUser.password);
    });

    it('Solicita um pagamento e valida o registro na aba Mine', () => {
        cy.fixture('transactionData').then((data) => {
            const { amount, note } = data.requestPayment;

            cy.requestPayment(amount, note);

            cy.validateTransaction(amount, note);
        });
    });

    it('Efetua um pagamento e valida o registro na aba Mine', () => {
        cy.fixture('transactionData').then((data) => {
            const { amount, note } = data.directPayment;

            cy.makePayment(amount, note);

            cy.validateTransaction(amount, note);
        });
    });

    it('Valida o débito do saldo', () => {
        cy.fixture('transactionData').then((data) => {
            const { amount, note } = data.directPayment;

            TransactionPage.getUserBalance().then((initialBalance) => {

                cy.makePayment(amount, note);

                TransactionPage.validateBalanceDecreased(initialBalance, amount);


            });
        });
    });
});