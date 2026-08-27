import { MENU_LOCATORS, MY_ACCOUNT_LOCATORS } from '../support/locators';

class MyAccountPage {
  goToMyAccount() {
    cy.get(MENU_LOCATORS.MY_ACCOUNT).click();
    cy.get('h2').should('contain.text', 'User Settings');
    return this;
  }

  fillFirstName(firstName) {
    cy.get(MY_ACCOUNT_LOCATORS.FIRST_NAME_INPUT).should('be.visible');
    cy.get(MY_ACCOUNT_LOCATORS.FIRST_NAME_INPUT).clear();
    cy.get(MY_ACCOUNT_LOCATORS.FIRST_NAME_INPUT).type(firstName);
    return this;
  }

  fillLastName(lastName) {
    cy.get(MY_ACCOUNT_LOCATORS.LAST_NAME_INPUT).should('be.visible');
    cy.get(MY_ACCOUNT_LOCATORS.LAST_NAME_INPUT).clear();
    cy.get(MY_ACCOUNT_LOCATORS.LAST_NAME_INPUT).type(lastName);
    return this;
  }

  fillEmail(email) {
    cy.get(MY_ACCOUNT_LOCATORS.EMAIL_INPUT).should('be.visible');
    cy.get(MY_ACCOUNT_LOCATORS.EMAIL_INPUT).clear();
    cy.get(MY_ACCOUNT_LOCATORS.EMAIL_INPUT).type(email);
    return this;
  }

  fillPhone(phone) {
    cy.get(MY_ACCOUNT_LOCATORS.PHONE_INPUT).should('be.visible');
    cy.get(MY_ACCOUNT_LOCATORS.PHONE_INPUT).clear();
    cy.get(MY_ACCOUNT_LOCATORS.PHONE_INPUT).type(phone);
    return this;
  }

  submit() {
    cy.get(MY_ACCOUNT_LOCATORS.SUBMIT_BTN).click();
    return this;
  }

  clearFirstName() {
    cy.get(MY_ACCOUNT_LOCATORS.FIRST_NAME_INPUT).should('be.visible');
    cy.get(MY_ACCOUNT_LOCATORS.FIRST_NAME_INPUT).clear();
    cy.get(MY_ACCOUNT_LOCATORS.FIRST_NAME_INPUT).blur();
    return this;
  }

  clearLastName() {
    cy.get(MY_ACCOUNT_LOCATORS.LAST_NAME_INPUT).should('be.visible');
    cy.get(MY_ACCOUNT_LOCATORS.LAST_NAME_INPUT).clear();
    cy.get(MY_ACCOUNT_LOCATORS.LAST_NAME_INPUT).blur();
    return this;
  }

  clearEmail() {
    cy.get(MY_ACCOUNT_LOCATORS.EMAIL_INPUT).should('be.visible');
    cy.get(MY_ACCOUNT_LOCATORS.EMAIL_INPUT).clear();
    cy.get(MY_ACCOUNT_LOCATORS.EMAIL_INPUT).blur();
    return this;
  }

  clearPhone() {
    cy.get(MY_ACCOUNT_LOCATORS.PHONE_INPUT).should('be.visible');
    cy.get(MY_ACCOUNT_LOCATORS.PHONE_INPUT).clear();
    cy.get(MY_ACCOUNT_LOCATORS.PHONE_INPUT).blur();
    return this;
  }
}

export default new MyAccountPage();