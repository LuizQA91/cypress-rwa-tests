import user from '../fixtures/users.json';
import LoginPage from '../pages/LoginPage';

describe('Autenticação de Usuários', () => {
  beforeEach(() => {
    cy.resetDb();
    LoginPage.visit();
  });

  it('Realiza login com sucesso', () => {
    const { validUser } = Cypress.env('users');
    LoginPage
      .login(validUser.username, validUser.password)
      .validateLogin(validUser);
  });

  it('Exibe mensagem de erro para usuário incorreto', () => {
    const { validUser } = Cypress.env('users');
    LoginPage
      .loginError(user.invalidUser.username, validUser.password)
      .errorMessage();
  });

  it('Exibe mensagem de erro para senha incorreta', () => {
    const { validUser } = Cypress.env('users');
    LoginPage
      .loginError(validUser.username, user.invalidUser.password)
      .errorMessage();
  });
});