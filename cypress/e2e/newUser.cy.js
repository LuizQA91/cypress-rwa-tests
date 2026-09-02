import user from '../fixtures/newUser.json';
import bank from '../fixtures/banks.json';

describe('Fluxo de Cadastro', () => {
    beforeEach(() => {
        cy.resetDb();
    });

    it('Realiza o cadastro e primeiro acesso', () => {
        cy.createClient(user, bank);
    });
});