import { MENU_LOCATORS, NOTIFICATION_LOCATORS } from '../support/locators';

class NotificationsPage {
  get notificationList() {
    return NOTIFICATION_LOCATORS.NOTIFICATION_LIST;
  }

  get notificationListItem() {
    return NOTIFICATION_LOCATORS.NOTIFICATION_ITEM;
  }

  goToNotifications() {
    cy.get(MENU_LOCATORS.NOTIFICATIONS).should('be.visible').click({ force: true });
    return this;
  }

  dismissFirstNotification() {
    cy.get(NOTIFICATION_LOCATORS.NOTIFICATION_ITEM).first().find(NOTIFICATION_LOCATORS.DISMISS_BTN).click({ force: true });
    return this;
  }
}

export default new NotificationsPage();