import users from '../fixtures/users.json';
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
        cy.get(LOGIN_LOCATORS.PASSWORD).type(password);
        return this;
    }

    submit() {
        cy.get(LOGIN_LOCATORS.SUBMIT_BTN).click();
        return this;
    }

    login() {
        cy.resetDb();
        this.visit();
        this.fillUsername(users.validUser.username);
        this.fillPassword(users.validUser.password);
        this.submit();
        cy.url().should('not.include', '/signin');
        return this;
    }
}

export default new LoginPage();