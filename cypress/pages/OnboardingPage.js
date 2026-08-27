import { SIGNUP_LOCATORS, ONBOARDING_LOCATORS, SIDENAV_LOCATORS } from '../support/locators';

class OnboardingPage {
    visitSignInPage() {
        cy.visit('/signin');
        return this;
    }

    clickSignUpLink() {
        cy.get(SIGNUP_LOCATORS.SIGNUP_LINK).click();
        return this;
    }

    fillSignUpForm(user) {
        cy.get(SIGNUP_LOCATORS.FIRST_NAME_INPUT).type(user.firstName);
        cy.get(SIGNUP_LOCATORS.LAST_NAME_INPUT).type(user.lastName);
        cy.get(SIGNUP_LOCATORS.USERNAME_INPUT).type(user.username);
        cy.get(SIGNUP_LOCATORS.PASSWORD_INPUT, { log: false }).type(user.password, { log: false });
        cy.get(SIGNUP_LOCATORS.CONFIRM_PASSWORD_INPUT, { log: false }).type(user.password, { log: false });
        return this;
    }

    submitSignUp() {
        cy.get(SIGNUP_LOCATORS.SUBMIT_BTN).click();
        return this;
    }

    clickNextOnboarding() {
        cy.get(ONBOARDING_LOCATORS.NEXT_BTN).click();
        return this;
    }

    fillBankAccountForm(bank) {
        cy.get(ONBOARDING_LOCATORS.BANK_NAME_INPUT).type(bank.name);
        cy.get(ONBOARDING_LOCATORS.ROUTING_NUMBER_INPUT).type(bank.routingNumber);
        cy.get(ONBOARDING_LOCATORS.ACCOUNT_NUMBER_INPUT).type(bank.accountNumber);
        return this;
    }

    submitSaveBank() {
        cy.get(ONBOARDING_LOCATORS.SAVE_BANK_BTN).click();
        return this;
    }

    clickDoneOnboarding() {
        cy.get(ONBOARDING_LOCATORS.DONE_BTN).click();
        return this;
    }

    validateFirstNameInSidenav(firstName) {
        cy.get(SIDENAV_LOCATORS.USER_FULL_NAME).should('contain.text', firstName);
        return this;
    }
}

export default new OnboardingPage();