import { API_ENDPOINTS } from '../support/locators';

class ApiPage {
    get baseUrl() {
        return Cypress.env('apiUrl');
    }

    login(username, password) {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}${API_ENDPOINTS.LOGIN}`,
            body: { username, password },
            failOnStatusCode: false
        });
    }

    logout() {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}${API_ENDPOINTS.LOGOUT}`,
            failOnStatusCode: false
        });
    }

    checkAuth() {
        return cy.request({
            method: 'GET',
            url: `${this.baseUrl}${API_ENDPOINTS.CHECK_AUTH}`,
            failOnStatusCode: false
        });
    }

    getBankAccounts() {
        return cy.request({
            method: 'GET',
            url: `${this.baseUrl}${API_ENDPOINTS.BANK_ACCOUNTS}`,
            failOnStatusCode: false
        });
    }

    createBankAccount(bankName, routingNumber, accountNumber) {
        const body = (bankName === null || bankName === undefined)
            ? {}
            : { bankName, routingNumber, accountNumber };

        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}${API_ENDPOINTS.BANK_ACCOUNTS}`,
            body: body,
            failOnStatusCode: false
        });
    }

    deleteBankAccount(bankAccountId) {
        return cy.request({
            method: 'DELETE',
            url: `${this.baseUrl}${API_ENDPOINTS.BANK_ACCOUNTS}/${bankAccountId}`,
            failOnStatusCode: false
        });
    }

    getPublicTransactions() {
        return cy.request({
            method: 'GET',
            url: `${this.baseUrl}${API_ENDPOINTS.TRANSACTIONS_PUBLIC}`,
            failOnStatusCode: false
        });
    }

    getPersonalTransactions() {
        return cy.request({
            method: 'GET',
            url: `${this.baseUrl}${API_ENDPOINTS.TRANSACTIONS}`,
            failOnStatusCode: false
        });
    }

    createTransaction(amount, transactionType, note, receiverId, privacyLevel = 'public') {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}${API_ENDPOINTS.TRANSACTIONS}`,
            body: {
                amount: Number(amount),
                transactionType,
                description: note,
                receiverId,
                privacyLevel
            },
            failOnStatusCode: false
        });
    }

    getNotifications() {
        return cy.request({
            method: 'GET',
            url: `${this.baseUrl}${API_ENDPOINTS.NOTIFICATIONS}`,
            failOnStatusCode: false
        });
    }

    dismissNotification(notificationId) {
        return cy.request({
            method: 'PATCH',
            url: `${this.baseUrl}${API_ENDPOINTS.NOTIFICATIONS}/${notificationId}`,
            body: {
                isRead: true
            },
            failOnStatusCode: false
        });
    }

    createUser(firstName, lastName, username, password, confirmPassword) {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}${API_ENDPOINTS.USERS}`,
            body: { firstName, lastName, username, password, confirmPassword },
            failOnStatusCode: false
        });
    }
}

export default new ApiPage();