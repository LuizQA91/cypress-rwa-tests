
export const LOGIN_LOCATORS = {
  USERNAME: '#username',
  PASSWORD: '#password',
  SUBMIT_BTN: '[data-test="signin-submit"]',
  ERROR_MSG: '[data-test="signin-error"]',
  USER_FULL_NAME: '[data-test="sidenav-user-full-name"]'
};

export const MENU_LOCATORS = {
  HOME: '[data-test="sidenav-home"]',
  MY_ACCOUNT: '[data-test="sidenav-user-settings"]',
  BANK_ACCOUNTS: '[data-test="sidenav-bankaccounts"]',
  NOTIFICATIONS: '[data-test="sidenav-notifications"]',
  LOGOUT: '[data-test="sidenav-signout"]'
};

export const TAB_LOCATORS = {
  EVERYONE: '[data-test="nav-public-tab"]',
  FRIENDS: '[data-test="nav-contacts-tab"]',
  MINE: '[data-test="nav-personal-tab"]'
};

export const HOME = {
  TRANSACTION_LIST: '[data-test="transaction-list"]'
};

export const TRANSACTION_LOCATORS = {
  TRANSACTION_ITEM: '[data-test^="transaction-item-"]',
  TRANSACTION_DETAIL_HEADER: '[data-test="transaction-detail-header"]',
  NEW_TRANSACTION_BTN: '[data-test="nav-top-new-transaction"]',
  USER_LIST_ITEM: '[data-test^="user-list-item"]',
  AMOUNT_INPUT: '#amount',
  DESCRIPTION_INPUT: '#transaction-create-description-input',
  REQUEST_PAYMENT_BTN: '[data-test="transaction-create-submit-request"]',
  RETURN_TO_TRANSACTIONS_BTN: '[data-test="new-transaction-return-to-transactions"]',
  MINE_TAB: '[data-test="nav-personal-tab"]',
  SUCCESS_TITLE: 'h2, [data-test="alert-bar"]',
  PAY_BTN: '[data-test="transaction-create-submit-payment"]',
  USER_BALANCE: '[data-test="sidenav-user-balance"]'
};

export const TRANSACTION_DETAIL_LOCATORS = {
  LIKE_BUTTON: '[data-test^="transaction-like-button-"]',
  LIKE_COUNT: '[data-test^="transaction-like-count-"]',
  COMMENT_INPUT: '[data-test^="transaction-comment-input-"]',
  COMMENT_ITEM: '[data-test^="transaction-comment-"]'
};

export const MY_ACCOUNT_LOCATORS = {
  FIRST_NAME_INPUT: '[data-test="user-settings-firstName-input"]',
  LAST_NAME_INPUT: '[data-test="user-settings-lastName-input"]',
  EMAIL_INPUT: '[data-test="user-settings-email-input"]',
  PHONE_INPUT: '[data-test="user-settings-phoneNumber-input"]',
  SUBMIT_BTN: '[data-test="user-settings-submit"]',
  FIRST_NAME_ERROR: '#user-settings-firstName-input-helper-text',
  LAST_NAME_ERROR: '#user-settings-lastName-input-helper-text',
  EMAIL_ERROR: '#user-settings-email-input-helper-text',
  PHONE_ERROR: '#user-settings-phoneNumber-input-helper-text'
};

export const SIDENAV_LOCATORS = {
  USER_FULL_NAME: '[data-test="sidenav-user-full-name"]'
};

export const BANK_ACCOUNT_LOCATORS = {
  CREATE_BTN: '[data-test="bankaccount-new"]',
  BANK_LIST_ITEM: '[data-test^="bankaccount-list-item-"]',
  DELETE_BTN: '[data-test*="delete"]',
  BANK_NAME_INPUT: '[data-test="bankaccount-bankName-input"]',
  ROUTING_NUMBER_INPUT: '[data-test="bankaccount-routingNumber-input"]',
  ACCOUNT_NUMBER_INPUT: '[data-test="bankaccount-accountNumber-input"]',
  SAVE_BTN: '[data-test="bankaccount-submit"]'
};

export const NOTIFICATION_LOCATORS = {
  NOTIFICATION_LIST: '[data-test="notifications-list"]',
  NOTIFICATION_ITEM: '[data-test^="notification-list-item"]',
  DISMISS_BTN: '[data-test^="notification-mark-read"]'
};

export const SIGNUP_LOCATORS = {
  SIGNUP_LINK: '[data-test="signup"]',
  FIRST_NAME_INPUT: '[data-test="signup-first-name"]',
  LAST_NAME_INPUT: '[data-test="signup-last-name"]',
  USERNAME_INPUT: '[data-test="signup-username"]',
  PASSWORD_INPUT: '[data-test="signup-password"]',
  CONFIRM_PASSWORD_INPUT: '[data-test="signup-confirmPassword"]',
  SUBMIT_BTN: '[data-test="signup-submit"]',
};

export const ONBOARDING_LOCATORS = {
  NEXT_BTN: '[data-test="user-onboarding-next"]',
  BANK_NAME_INPUT: '[data-test="bankaccount-bankName-input"]',
  ROUTING_NUMBER_INPUT: '[data-test="bankaccount-routingNumber-input"]',
  ACCOUNT_NUMBER_INPUT: '[data-test="bankaccount-accountNumber-input"]',
  SAVE_BANK_BTN: '[data-test="bankaccount-submit"]',
  DONE_BTN: '[data-test="user-onboarding-next"]',
};

export const API_ENDPOINTS = {
    LOGIN: '/login',
    LOGOUT: '/logout',
    CHECK_AUTH: '/checkAuth',
    USERS: '/users',
    TRANSACTIONS: '/transactions',
    TRANSACTIONS_PUBLIC: '/transactions/public',
    TRANSACTIONS_CONTACTS: '/transactions/contacts',
    BANK_ACCOUNTS: '/bankAccounts',
    NOTIFICATIONS: '/notifications'
};