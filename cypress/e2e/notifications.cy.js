import LoginPage from '../pages/LoginPage';
import NotificationsPage from '../pages/NotificationsPage';

describe('Validação da Tela Notifications', () => {
    beforeEach(() => {
        cy.resetDb()
        const { validUser } = Cypress.env('users');
        LoginPage
            .visit()
            .login(validUser.username, validUser.password)
        NotificationsPage.goToNotifications();
    });

    it('Valida que existem notificações na lista', () => {
        cy.get(NotificationsPage.notificationListItem)
            .should('have.length.greaterThan', 0);
    });

    it('Valida botão Dismiss', () => {
        cy.intercept('PATCH', '/notifications/*').as('dismissNotification');

        cy.get(NotificationsPage.notificationListItem).then(($itemsBefore) => {
            const initialCount = $itemsBefore.length;

            NotificationsPage.dismissFirstNotification();

            cy.wait('@dismissNotification');

            cy.get(NotificationsPage.notificationListItem)
                .should('have.length', initialCount - 1);
        });
    });
});