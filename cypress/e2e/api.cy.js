import ApiPage from '../pages/ApiPage';
import user from '../fixtures/users.json';
import bank from '../fixtures/banks.json';
import transaction from '../fixtures/transactionData.json';
import newUser from '../fixtures/newUser.json';

describe('Testes de API', () => {
    beforeEach(() => {
        cy.resetDb();
    });

    context('Autenticação e Sessão (/signin)', () => {
        it('Realiza autenticação com sucesso', () => {
            const { validUser } = Cypress.env('users');

            ApiPage.login(validUser.username, validUser.password).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('user');
                expect(response.body.user.username).to.eq(validUser.username);
                expect(response.body.user.firstName).to.eq(validUser.name.split(' ')[0]);
            });
        });

        it('Retorna erro 401 ao autenticar com senha inválida', () => {
            const { validUser } = Cypress.env('users');

            ApiPage.login(validUser.username, user.invalidUser.password).then((response) => {
                expect(response.status).to.eq(401);
            });
        });

        it('Retorna erro 401 ao autenticar com usuário não cadastrado', () => {
            ApiPage.login(user.invalidUser.username, user.invalidUser.password).then((response) => {
                expect(response.status).to.eq(401);
            });
        });

        it('Realiza logout e encerra a sessão', () => {
            const { validUser } = Cypress.env('users');

            ApiPage.login(validUser.username, validUser.password).then(() => {
                ApiPage.logout().then((response) => {
                    expect(response.status).to.eq(200);
                });
            });
        });
    });

    context('Contas Bancárias (/bankAccounts)', () => {
        beforeEach(() => {
            const { validUser } = Cypress.env('users');
            ApiPage.login(validUser.username, validUser.password);
        });

        it('Lista as contas bancárias do usuário autenticado', () => {
            ApiPage.getBankAccounts().then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.results).to.be.an('array');
            });
        });

        it('Cadastra nova conta bancária', () => {
            const { name, routingNumber, accountNumber } = bank.bank1;

            ApiPage.createBankAccount(name, routingNumber, accountNumber).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.account).to.have.property('bankName', name);
                expect(response.body.account).to.have.property('routingNumber', routingNumber);
                expect(response.body.account).to.have.property('accountNumber', accountNumber);
            });
        });

        it('Retorna erro ao tentar cadastrar conta sem preencher campos obrigatórios', () => {
            ApiPage.createBankAccount(null).then((response) => {
                expect(response.status).to.eq(422);
            });
        });

        it('Exclui conta bancária', () => {
            ApiPage.getBankAccounts().then((response) => {
                const accountId = response.body.results[0].id;
                ApiPage.deleteBankAccount(accountId).then((deleteRes) => {
                    expect(deleteRes.status).to.eq(200);
                });
            });
        });
    });

    context('Transações (/transactions)', () => {
        beforeEach(() => {
            const { validUser } = Cypress.env('users');
            ApiPage.login(validUser.username, validUser.password);
        });

        it('Lista as transações públicas', () => {
            ApiPage.getPublicTransactions().then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.results).to.be.an('array');
            });
        });

        it('Lista as transações pessoais do usuário', () => {
            ApiPage.getPersonalTransactions().then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.results).to.be.an('array');
            });
        });

        it('Efetua um pagamento', () => {
            const { amount, note } = transaction.directPayment;

            ApiPage.getPublicTransactions().then((publicRes) => {

                const receiverId = publicRes.body.results[0].receiverId;

                ApiPage.createTransaction(amount, 'payment', note, receiverId).then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body.transaction).to.exist;
                    expect(response.body.transaction.amount).to.eq(Number(amount) * 100);
                });
            });
        });

        it('Solicita um pagamento', () => {
            const { amount, note } = transaction.requestPayment;

            ApiPage.getPublicTransactions().then((publicRes) => {
                const receiverId = publicRes.body.results[0].receiverId;

                ApiPage.createTransaction(amount, 'request', note, receiverId).then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body.transaction).to.have.property('amount', Number(amount) * 100);
                    expect(response.body.transaction).to.have.property('requestStatus', 'pending');
                });
            });
        });

        it('Retorna erro ao tentar criar transação com valor inválido', () => {
            ApiPage.getPublicTransactions().then((publicRes) => {
                const receiverId = publicRes.body.results[0].receiverId;

                ApiPage.createTransaction('invalido', 'payment', 'Valor invalido', receiverId).then((response) => {
                    expect(response.status).to.eq(422);
                });
            });
        });
    });

    context('Notificações (/notifications)', () => {
        beforeEach(() => {
            const { validUser } = Cypress.env('users');
            ApiPage.login(validUser.username, validUser.password);
        });

        it('Lista as notificações do usuário', () => {
            ApiPage.getNotifications().then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.results).to.be.an('array');
            });
        });

        it('Descarta uma notificação', () => {
            ApiPage.getNotifications().then((response) => {
                expect(response.status).to.eq(200);

                const notificationId = response.body.results[0].id;

                ApiPage.dismissNotification(notificationId).then((dismissRes) => {
                    expect(dismissRes.status).to.eq(204);
                });
            });
        });
    });

    context('Usuários (/users)', () => {
        it('Cadastra um novo usuário', () => {
            ApiPage.createUser(
                newUser.firstName,
                newUser.lastName,
                newUser.username,
                newUser.password,
                newUser.password
            ).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.user).to.have.property('username', newUser.username);
            });
        });
    });
});