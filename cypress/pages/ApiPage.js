import { API_ENDPOINTS } from '../support/locators';

class ApiPage {
    get baseUrl() {
        return Cypress.env('apiUrl');
    }

    login(username, password) {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}${API_ENDPOINTS.LOGIN}`,
            body: {
                username,
                password
            },
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
}

export default new ApiPage();