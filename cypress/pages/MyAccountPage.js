import { MENU_LOCATORS, MY_ACCOUNT_LOCATORS } from '../support/locators';

class MyAccountPage {
  goToMyAccount() {
    cy.get(MENU_LOCATORS.MY_ACCOUNT).click();
    cy.get('h2').then(($title) => {
      const text = $title.text();
      expect(text).to.contain('User Settings');
    });
    return this;
  }

  fillFirstName(firstName) {
    cy.get(MY_ACCOUNT_LOCATORS.FIRST_NAME_INPUT).should('be.visible').clear().type(firstName);
    return this;
  }

  fillLastName(lastName) {
    cy.get(MY_ACCOUNT_LOCATORS.LAST_NAME_INPUT).should('be.visible').clear().type(lastName);
    return this;
  }

  fillEmail(email) {
    cy.get(MY_ACCOUNT_LOCATORS.EMAIL_INPUT).should('be.visible').clear().type(email);
    return this;
  }

  fillPhone(phone) {
    cy.get(MY_ACCOUNT_LOCATORS.PHONE_INPUT).should('be.visible').clear().type(phone);
    return this;
  }

  submit() {
    cy.get(MY_ACCOUNT_LOCATORS.SUBMIT_BTN).click();
    return this;
  }

  clearFirstName() {
        cy.get(MY_ACCOUNT_LOCATORS.FIRST_NAME_INPUT).should('be.visible').clear().blur();
    return this;
  }

  clearLastName() {
        cy.get(MY_ACCOUNT_LOCATORS.LAST_NAME_INPUT).should('be.visible').clear().blur();
    return this;
  }

  clearEmail() {
        cy.get(MY_ACCOUNT_LOCATORS.EMAIL_INPUT).should('be.visible').clear().blur();
    return this;
  }

  clearPhone() {
        cy.get(MY_ACCOUNT_LOCATORS.PHONE_INPUT).should('be.visible').clear().blur();
    return this;
  }
}

export default new MyAccountPage();