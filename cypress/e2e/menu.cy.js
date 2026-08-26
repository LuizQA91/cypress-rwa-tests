import user from '../fixtures/users.json'
import { MENU_LOCATORS, HOME } from '../support/locators'
import LoginPage from '../pages/LoginPage';

describe('Validação de Navegação do Menu Lateral', () => {
  beforeEach(() => {
    cy.resetDb();
    cy.visit('/signin');
    LoginPage.login(user.validUser.username, user.validUser.password);
    cy.url().should('not.include', '/signin');
  });

  it('Navega para My Account', () => {
    cy.get(MENU_LOCATORS.MY_ACCOUNT).click();
    cy.url().should('include', '/user/settings');

    cy.get('h2').then(($title) => {
      const text = $title.text();
      expect(text).to.contain('User Settings');
    });
  });

  it('Navega para Bank Accounts', () => {
    cy.get(MENU_LOCATORS.BANK_ACCOUNTS).click();
    cy.url().should('include', '/bankaccounts');

    cy.get('h2').then(($title) => {
      const text = $title.text();
      expect(text).to.contain('Bank Accounts');
    });
  });

  it('Navega para Notifications', () => {
    cy.get(MENU_LOCATORS.NOTIFICATIONS).click();
    cy.url().should('include', '/notifications');

    cy.get('h2').then(($title) => {
      const text = $title.text();
      expect(text).to.contain('Notifications');
    });
  });

  it('Navega para Home', () => {
    cy.get(MENU_LOCATORS.MY_ACCOUNT).click();

    cy.get(MENU_LOCATORS.HOME).click();
    cy.url().should('eq', `${Cypress.config('baseUrl')}/`);

    cy.get(HOME.TRANSACTION_LIST).should('be.visible');

  });

  it('Realiza Logout', () => {
    cy.get(MENU_LOCATORS.LOGOUT).should('be.visible').and('contain.text', 'Logout').click();
    cy.url().should('include', '/signin');
    cy.get('h1').then(($title) => {
      const text = $title.text();
      expect(text).to.contain('Sign in');
    });
  });
});