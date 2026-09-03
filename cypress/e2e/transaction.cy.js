import LoginPage from '../pages/LoginPage';
import TransactionPage from '../pages/TransactionPage';

describe('Fluxo de Transações', () => {
    beforeEach(() => {
        cy.resetDb();
        const { validUser } = Cypress.env('users');
        LoginPage
            .visit()
            .login(validUser.username, validUser.password)
    });

    it('Solicita um pagamento e valida o registro na aba Mine', () => {
        cy.fixture('transactionData').then((data) => {
            const { amount, note } = data.requestPayment;

            cy.requestPayment(amount, note);

            TransactionPage.validateTransaction(amount, note);
        });
    });

    it('Efetua um pagamento e valida o registro na aba Mine', () => {
        cy.fixture('transactionData').then((data) => {
            const { amount, note } = data.directPayment;

            cy.makePayment(amount, note);

            TransactionPage.validateTransaction(amount, note);
        });
    });

    it('Valida o débito do saldo', () => {
        cy.intercept('POST', '/transactions').as('postTransaction');

        cy.fixture('transactionData').then((data) => {
            const { amount, note } = data.directPayment;

            TransactionPage.getUserBalance().then((initialBalance) => {
                cy.makePayment(amount, note);

                cy.wait('@postTransaction');

                TransactionPage.validateBalanceDecreased(initialBalance, amount);
            });
        });
    });
});