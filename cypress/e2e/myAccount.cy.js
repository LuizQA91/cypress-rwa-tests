import LoginPage from '../pages/LoginPage';
import MyAccountPage from '../pages/MyAccountPage';
import { MY_ACCOUNT_LOCATORS, SIDENAV_LOCATORS } from '../support/locators';

describe('Validação da Tela My Account', () => {
    beforeEach(() => {
        LoginPage.login();
        MyAccountPage.goToMyAccount();
    });

    it('Atualiza os dados do usuário', () => {
        const newFirstName = 'Teste';
        const newLastName = 'Testador';
        const newEmail = 'teste@test.com';
        const newPhone = '11999998888';

        MyAccountPage.fillFirstName(newFirstName)
            .fillLastName(newLastName)
            .fillEmail(newEmail)
            .fillPhone(newPhone)
            .submit();

        cy.get(MY_ACCOUNT_LOCATORS.FIRST_NAME_INPUT).should('have.value', newFirstName);
        cy.get(MY_ACCOUNT_LOCATORS.LAST_NAME_INPUT).should('have.value', newLastName);
        cy.get(MY_ACCOUNT_LOCATORS.EMAIL_INPUT).should('have.value', newEmail);
        cy.get(SIDENAV_LOCATORS.USER_FULL_NAME).should('contain', newFirstName);

    });
    it('Exibe mensagem de erro e botão Salvar desabilitado quando campo First Name vazio', () => {
        MyAccountPage.clearFirstName();
        cy.get(MY_ACCOUNT_LOCATORS.FIRST_NAME_ERROR).then(($error) => {
            expect($error).to.be.visible;
            expect($error.text().trim()).to.equal('Enter a first name');
        });
        cy.get(MY_ACCOUNT_LOCATORS.SUBMIT_BTN).then(($button) => {
            expect($button).to.be.disabled;
        });
    });

    it('Exibe mensagem de erro e botão Salvar desabilitado quando campo Last Name vazio', () => {
        MyAccountPage.clearLastName();
        cy.get(MY_ACCOUNT_LOCATORS.LAST_NAME_ERROR).then(($error) => {
            expect($error).to.be.visible;
            expect($error.text().trim()).to.equal('Enter a last name');
        });
        cy.get(MY_ACCOUNT_LOCATORS.SUBMIT_BTN).then(($button) => {
            expect($button).to.be.disabled;
        });
    });

    it('Exibe mensagem de erro e botão Salvar desabilitado quando campo Email vazio', () => {
        MyAccountPage.clearEmail();
        cy.get(MY_ACCOUNT_LOCATORS.EMAIL_ERROR).then(($error) => {
            expect($error).to.be.visible;
            expect($error.text().trim()).to.equal('Enter an email address');
        });
        cy.get(MY_ACCOUNT_LOCATORS.SUBMIT_BTN).then(($button) => {
            expect($button).to.be.disabled;
        });
    });

    it('Exibe mensagem de erro e botão Salvar desabilitado quando campo Phone vazio', () => {
        MyAccountPage.clearPhone();
        cy.get(MY_ACCOUNT_LOCATORS.PHONE_ERROR).then(($error) => {
            expect($error).to.be.visible;
            expect($error.text().trim()).to.equal('Enter a phone number');
        });
        cy.get(MY_ACCOUNT_LOCATORS.SUBMIT_BTN).then(($button) => {
            expect($button).to.be.disabled;
        });
    });
});
