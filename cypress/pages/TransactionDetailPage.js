import { TRANSACTION_DETAIL_LOCATORS } from '../support/locators';

class TransactionDetailPage {
  likeTransaction() {
    cy.get(TRANSACTION_DETAIL_LOCATORS.LIKE_BUTTON).click();
    return this;
  }

  addComment(commentText) {
    cy.get(TRANSACTION_DETAIL_LOCATORS.COMMENT_INPUT)
      .should('be.visible')
      .type(`${commentText}{enter}`);
    return this;
  }
}

export default new TransactionDetailPage();