import ApiPage from '../pages/ApiPage';
import user from '../fixtures/users.json';

describe('Testes de API', () => {
    beforeEach(() => {
        cy.resetDb();
    });

    it('Realiza autenticação via API com sucesso', () => {
        const { validUser } = Cypress.env('users');

        ApiPage.login(validUser.username, validUser.password).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('user');
            expect(response.body.user.username).to.eq(validUser.username);
        });
    });

    it('Retorna erro 401 ao autenticar com senha inválida', () => {
        const { validUser } = Cypress.env('users');

        ApiPage.login(validUser.username, user.invalidUser.password).then((response) => {
            expect(response.status).to.eq(401);
        });
    });

    it('Lista as contas bancárias do usuário autenticado', () => {
        const { validUser } = Cypress.env('users');

        ApiPage.login(validUser.username, validUser.password).then(() => {
            ApiPage.getBankAccounts().then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.results).to.be.an('array');
            });
        });
    });
});