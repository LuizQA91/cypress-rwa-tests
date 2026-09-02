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

    validateLogin(validUser) {
        cy.get(LOGIN_LOCATORS.USER_FULL_NAME)
            .should('be.visible')
            .and('contain.text', validUser.name);
        return this;
    }

    loginError(username, password) {
        this.visit();
        this.fillUsername(username);
        this.fillPassword(password);
        this.submit();
        cy.url().should('include', '/signin');
        return this;
    }

    errorMessage() {
        cy.get('[data-test="signin-error"]')
            .should('be.visible')
            .and('have.text', 'Username or password is invalid');
        return this
    }

}

export default new LoginPage();