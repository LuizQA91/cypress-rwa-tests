import LoginPage from '../pages/LoginPage';
import TransactionPage from '../pages/TransactionPage';

describe('Fluxo de Transações', () => {
    beforeEach(() => {
        LoginPage.login();
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