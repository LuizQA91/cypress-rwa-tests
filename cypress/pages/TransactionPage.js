import { TRANSACTION_LOCATORS } from '../support/locators';

class TransactionPage {
    clickNewTransaction() {
        cy.get(TRANSACTION_LOCATORS.NEW_TRANSACTION_BTN).click({ force: true });
        return this;
    }

    selectFirstUser() {
        cy.get(TRANSACTION_LOCATORS.USER_LIST_ITEM).first().click();
        return this;
    }

    fillAmount(amount) {
        cy.get(TRANSACTION_LOCATORS.AMOUNT_INPUT).type(amount);
        return this;
    }

    fillDescription(description) {
        cy.get(TRANSACTION_LOCATORS.DESCRIPTION_INPUT).type(description);
        return this;
    }

    clickRequest() {
        cy.get(TRANSACTION_LOCATORS.REQUEST_PAYMENT_BTN).click();
        return this;
    }

    clickPay() {
        cy.get(TRANSACTION_LOCATORS.PAY_BTN).click();
        return this;
    }

    validateSuccess(amount, note) {
        cy.get(TRANSACTION_LOCATORS.SUCCESS_TITLE).filter(':visible').should('contain.text', amount).and('contain.text', note);
        return this;
    }

    clickReturnToTransactions() {
        cy.get(TRANSACTION_LOCATORS.RETURN_TO_TRANSACTIONS_BTN).click();
        return this;
    }

    getUserBalance() {
        return cy.get(TRANSACTION_LOCATORS.USER_BALANCE).invoke('text').then((text) => {
            const cleanText = text.replace(/[^0-9.]/g, '');
            return Number(cleanText);
        });
    }

    validateBalanceDecreased(initialBalance, amountPaid) {
        const expectedBalance = initialBalance - Number(amountPaid);

        this.getUserBalance().then((currentBalance) => {
            expect(currentBalance.toFixed(2)).to.eq(expectedBalance.toFixed(2));
        });

        return this;
    }
}

export default new TransactionPage();