import { MENU_LOCATORS, BANK_ACCOUNT_LOCATORS } from '../support/locators';

class BankAccountsPage {
  get bankListItem() {
    return BANK_ACCOUNT_LOCATORS.BANK_LIST_ITEM;
  }

  goToBankAccounts() {
    cy.get(MENU_LOCATORS.BANK_ACCOUNTS).should('be.visible').click({ force: true });
    return this;
  }

  clickCreateNew() {
    cy.get(BANK_ACCOUNT_LOCATORS.CREATE_BTN).click();
    cy.url().should('include', '/bankaccounts/new');
    return this;
  }

  fillBankName(bank) {
    cy.get(BANK_ACCOUNT_LOCATORS.BANK_NAME_INPUT).should('be.visible').type(bank);
    return this;
  }

  fillRoutingNumber(routingNumber) {
    cy.get(BANK_ACCOUNT_LOCATORS.ROUTING_NUMBER_INPUT).should('be.visible').type(routingNumber);
    return this;
  }

  fillAccountNumber(accountNumber) {
    cy.get(BANK_ACCOUNT_LOCATORS.ACCOUNT_NUMBER_INPUT).should('be.visible').type(accountNumber);
    return this;
  }

  save() {
    cy.get(BANK_ACCOUNT_LOCATORS.SAVE_BTN).click();
    cy.url().should('include', '/bankaccounts');
    return this;
  }

  deleteBankAccountByName(bankName) {
  cy.get(BANK_ACCOUNT_LOCATORS.BANK_LIST_ITEM)
  .contains(bankName)
  .closest(BANK_ACCOUNT_LOCATORS.BANK_LIST_ITEM)
  .find(BANK_ACCOUNT_LOCATORS.DELETE_BTN)
  .should('be.visible')
  .click();
  return this;
}
}

export default new BankAccountsPage();