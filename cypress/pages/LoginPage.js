import { LOGIN_LOCATORS } from '../support/locators';

class LoginPage {
    visit() {
        cy.visit('/signin');
        return this;
    }

    fillUsername(username) {
        cy.get(LOGIN_LOCATORS.USERNAME).type(username);
        return this;
    }

    fillPassword(password) {
        cy.get(LOGIN_LOCATORS.PASSWORD, { log: false }).type(password, { log: false });
        return this;
    }

    submit() {
        cy.get(LOGIN_LOCATORS.SUBMIT_BTN).click();
        return this;
    }

    login(username, password) {
        this.visit();
        this.fillUsername(username);
        this.fillPassword(password);
        this.submit();
        cy.url().should('not.include', '/signin');
        return this;
    }
}

export default new LoginPage();