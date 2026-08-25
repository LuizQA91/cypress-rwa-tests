import { TAB_LOCATORS } from '../support/locators'
import LoginPage from '../pages/LoginPage';

describe('Validação de Navegação das Abas Superiores', () => {
    beforeEach(() => {
        LoginPage.login();
    });

    it('Navega para Friends', () => {
        cy.get(TAB_LOCATORS.FRIENDS).click();
        cy.url().then((url) => {
            expect(url).to.include('/contacts');
        });
        cy.get('[data-test="main"]').then(($content) => {
            const text = $content.text();
            expect(text).to.contain('Contacts');
        });
    });

    it('Navega para Mine', () => {
        cy.get(TAB_LOCATORS.MINE).click();
        cy.url().then((url) => {
            expect(url).to.include('/personal');
        });
        cy.get('[data-test="main"]').then(($content) => {
            const text = $content.text();
            expect(text).to.contain('Personal');
        });
    });

    it('Navega para Everyone', () => {
        cy.get(TAB_LOCATORS.MINE).click();
        cy.get(TAB_LOCATORS.EVERYONE).click();
        cy.url().should('eq', `${Cypress.config('baseUrl')}/`);
        cy.get('[data-test="main"]').then(($content) => {
            const text = $content.text();
            expect(text).to.contain('Public');
        });
    });
});

