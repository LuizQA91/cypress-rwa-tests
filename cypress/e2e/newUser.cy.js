import OnboardingPage from '../pages/OnboardingPage';
import LoginPage from '../pages/LoginPage';
import user from '../fixtures/newUser.json';
import bank from '../fixtures/banks.json';

describe('Fluxo de Cadastro', () => {
    beforeEach(() => {
        cy.resetDb();
    });

    it('Realiza o cadastro e primeiro acesso', () => {
        OnboardingPage
            .visitSignInPage()
            .clickSignUpLink()
            .fillSignUpForm(user)
            .submitSignUp();

        LoginPage.login(user.username, user.password);

        OnboardingPage
            .clickNextOnboarding()
            .fillBankAccountForm(bank.bank1)
            .submitSaveBank()
            .clickDoneOnboarding()
            .validateFirstNameInSidenav(user.firstName);
    });
});