import { MENU_LOCATORS, TRANSACTION_LOCATORS } from '../support/locators';

class HomePage {
  goToHome() {
    cy.get(MENU_LOCATORS.HOME).click();
    return this;
  }

  clickFirstTransaction() {
    cy.get(TRANSACTION_LOCATORS.TRANSACTION_ITEM).first().click({ force: true });
    return this;
  }
}

export default new HomePage();