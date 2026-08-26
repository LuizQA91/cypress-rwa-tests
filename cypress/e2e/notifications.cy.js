import LoginPage from '../pages/LoginPage';
import NotificationsPage from '../pages/NotificationsPage';
import user from '../fixtures/users.json';

describe('Validação da tela Notifications', () => {
    beforeEach(() => {
        LoginPage.login(user.validUser.username, user.validUser.password);
        NotificationsPage.goToNotifications();
    });

    it('Valida que existem notificações na lista', () => {
        cy.get(NotificationsPage.notificationListItem)
            .should('have.length.greaterThan', 0);
    });

    it('Valida botão Dismiss', () => {
        cy.get(NotificationsPage.notificationListItem).then(($itemsBefore) => {
            const initialCount = $itemsBefore.length;

            NotificationsPage.dismissFirstNotification();

            cy.get(NotificationsPage.notificationListItem)
                .should(($itemsAfter) => {
                    expect($itemsAfter.length).to.be.lessThan(initialCount);
                });
        });
    });
});