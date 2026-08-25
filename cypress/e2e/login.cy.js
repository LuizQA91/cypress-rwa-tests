import users from '../fixtures/users.json';
import { LOGIN_LOCATORS } from '../support/locators';

describe('Autenticação de Usuários', () => {
  beforeEach(() => {
    cy.resetDb();
    cy.visit('/signin')
  });

  it('Realiza login com sucesso', () => {
    cy.login(users.validUser.username, users.validUser.password);

    cy.url().should('not.include', '/signin');
    cy.get(LOGIN_LOCATORS.USER_FULL_NAME)
      .should('be.visible')
      .and('contain.text', users.validUser.name);
  });

  it('Exibe mensagem de erro para usuário incorreto', () => {
    cy.login(users.invalidUser.username, users.validUser.password);

    cy.errorMsg();
  });

  it('Exibe mensagem de erro para senha incorreta', () => {

    cy.login(users.validUser.username, users.invalidUser.password);

    cy.errorMsg();
  });
});