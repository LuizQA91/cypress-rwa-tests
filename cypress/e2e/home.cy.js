import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import TransactionDetailPage from '../pages/TransactionDetailPage';
import { TRANSACTION_LOCATORS, TRANSACTION_DETAIL_LOCATORS } from '../support/locators';

describe('Validação dos Detalhes da Transação', () => {
    beforeEach(() => {
        const { validUser } = Cypress.env('users');
        LoginPage
            .visit()
            .login(validUser.username, validUser.password)
        HomePage.goToHome().clickFirstTransaction();
    });

    it('Exibe detalhes da transação', () => {
        cy.url().then((url) => {
            expect(url).to.include('/transaction/');
        });

        cy.get(TRANSACTION_LOCATORS.TRANSACTION_DETAIL_HEADER).then(($header) => {
            expect($header).to.be.visible;
            expect($header.text().trim()).to.contain('Transaction Detail');
        });
    });

    it('Altera o contador do botão Like', () => {
        cy.get(TRANSACTION_DETAIL_LOCATORS.LIKE_COUNT).then(($countBefore) => {
            const initialLikes = parseInt($countBefore.text(), 10) || 0;

            TransactionDetailPage.likeTransaction();

            cy.get(TRANSACTION_DETAIL_LOCATORS.LIKE_COUNT).then(($countAfter) => {
                const currentLikes = parseInt($countAfter.text(), 10);
                expect(currentLikes).to.equal(initialLikes + 1);
            });
        });
    });

    it('Adiciona um comentário', () => {
        const customComment = "Teste de comentário";

        TransactionDetailPage.addComment(customComment);

        cy.contains(customComment).should('be.visible').then(($comment) => {
            expect($comment.text().trim()).to.contain(customComment);
        });
    });
});