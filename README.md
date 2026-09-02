# 🧪 Automação de Testes E2E com Cypress — Real World App (RWA)

Projeto de automação de testes End-to-End (E2E) desenvolvido em Cypress para validação dos principais fluxos funcionais, de negócio e regressivos da aplicação **Cypress Real World App (RWA)**.

---

## 📌 Sobre o Projeto

O objetivo deste repositório é aplicar boas práticas de automação de testes com Cypress em uma aplicação web full-stack realista que simula um aplicativo de transferências bancárias e rede social.

### 🛠️ Tecnologias Utilizadas

* **[Cypress](https://www.cypress.io/)** — Framework de automação de testes E2E
* **[Node.js](https://nodejs.org/)** — Ambiente de execução JavaScript (v18+)
* **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)** — Linguagem utilizada na escrita dos testes
* **[Real World App (RWA)](https://github.com/cypress-io/cypress-realworld-app)** — Aplicação sob teste

---
## 🧪 Suítes e Cenários de Testes (E2E)

### 🏦 `bankAccount.js`
#### **Suíte:** `Validação da Tela Bank Accounts`

* **`Cadastra uma nova conta bancária`** | *Positivo*  
  Cria uma nova conta bancária.
* **`Exclui uma conta bancária`** | *Positivo*  
  Cria uma conta bancária e em seguida realiza a sua exclusão, garantindo a exibição da tag `(Deleted)`.

---

### 🏠 `home.cy.js`
#### **Suíte:** `Validação dos Detalhes da Transação`

* **`Exibe detalhes da transação`** | *Positivo*  
  Acessa o primeiro item da lista na Home.
* **`Altera o contador do botão Like`** | *Positivo*  
  Curte uma transação específica e verifica se o número do contador de likes foi incrementado em 1 unidade.
* **`Adiciona um comentário`** | *Positivo*  
  Escreve um novo comentário no campo da transação e valida se a mensagem aparece corretamente listada.

---

### 🔑 `login.cy.js`
#### **Suíte:** `Autenticação de Usuários`

* **`Realiza login com sucesso`** | *Positivo*  
  Autentica o usuário no sistema com credenciais válidas obtidas das variáveis de ambiente.
* **`Exibe mensagem de erro para usuário incorreto`** | *Negativo*  
  Tenta autenticar com usuário inexistente e valida a exibição do alerta de erro.
* **`Exibe mensagem de erro para senha incorreta`** | *Negativo*  
  Tenta autenticar com usuário correto e senha inválida e valida a exibição do alerta de erro.

---

### 🧭 `menu.cy.js`
#### **Suíte:** `Validação de Navegação do Menu Lateral`

* **`Navega para My Account`** | *Positivo*  
  Clica na opção de conta no menu lateral e confirma a alteração de rota para `/user/settings`.
* **`Navega para Bank Accounts`** | *Positivo*  
  Clica no atalho de contas bancárias no menu lateral e valida o redirecionamento para `/bankaccounts`.
* **`Navega para Notifications`** | *Positivo*  
  Acessa a tela de notificações via menu lateral e valida o título e a URL `/notifications`.
* **`Navega para Home`** | *Positivo*  
  Efetua a navegação para outra tela e retorna para a página principal através do menu lateral.
* **`Realiza Logout`** | *Positivo*  
  Encerra a sessão do usuário ativo através da opção do menu e valida o retorno para a tela de *Sign in*.

---

### 👤 `myAccount.cy.js`
#### **Suíte:** `Validação da Tela My Account`

* **`Atualiza os dados do usuário`** | *Positivo*  
  Edita e salva o nome, sobrenome, e-mail e telefone nas configurações, validando a atualização dos campos e do header.
* **`Exibe mensagem de erro e botão Salvar desabilitado quando campo First Name vazio`** | *Negativo*  
  Apaga o conteúdo do campo nome, confirma o aparecimento da mensagem de obrigatoriedade e desativação do botão Salvar.
* **`Exibe mensagem de erro e botão Salvar desabilitado quando campo Last Name vazio`** | *Negativo*  
  Apaga o conteúdo do campo sobrenome, confirma o aparecimento da mensagem de obrigatoriedade e desativação do botão Salvar.
* **`Exibe mensagem de erro e botão Salvar desabilitado quando campo Email vazio`** | *Negativo*  
  Apaga o conteúdo do campo e-mail, confirma o aparecimento da mensagem de obrigatoriedade e desativação do botão Salvar.
* **`Exibe mensagem de erro e botão Salvar desabilitado quando campo Phone vazio`** | *Negativo*  
  Apaga o conteúdo do campo telefone, confirma o aparecimento da mensagem de obrigatoriedade e desativação do botão Salvar.

---

### 📝 `newUser.cy.js`
#### **Suíte:** `Fluxo de Cadastro`

* **`Realiza o cadastro e primeiro acesso`** | *Positivo*  
  Executa todo o fluxo de criação de conta de um novo usuário incluindo a adição da primeira conta bancária no *onboarding*.

---

### 🔔 `notifications.cy.js`
#### **Suíte:** `Validação da Tela Notifications`

* **`Valida que existem notificações na lista`** | *Positivo*  
  Acessa o painel de notificações do usuário e confirma a existência de ao menos um item listado.
* **`Valida botão Dismiss`** | *Positivo*  
  Clica na opção para descartar a primeira notificação e verifica se a quantidade total de itens na lista diminuiu.

---

### 📑 `tab.cy.js`
#### **Suíte:** `Validação de Navegação das Abas Superiores`

* **`Navega para Friends`** | *Positivo*  
  Clica no filtro superior de contatos e valida a transição para a rota `/contacts`.
* **`Navega para Mine`** | *Positivo*  
  Clica no filtro de transações pessoais e garante o direcionamento para a rota `/personal`.
* **`Navega para Everyone`** | *Positivo*  
  Alterna para a aba de transações públicas e confirma o recarregamento na rota principal `/`.

---

### 💸 `transaction.cy.js`
#### **Suíte:** `Fluxo de Transações`

* **`Solicita um pagamento e valida o registro na aba Mine`** | *Positivo*  
  Envia uma solicitação de cobrança para outro usuário e confirma se o registro aparece listado no seu histórico pessoal.
* **`Efetua um pagamento e valida o registro na aba Mine`** | *Positivo*  
  Transfere um valor diretamente para outro usuário e valida o registro correspondente no histórico.
* **`Valida o débito do saldo`** | *Positivo*  
  Obtém o valor do saldo antes do pagamento, executa a transferência e valida se o valor final reflete a subtração exata da quantia enviada.



## 💻 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado na sua máquina:

* **Node.js** (Versão 22.x ou superior) — [Download](https://nodejs.org/)
* **Git** — [Download](https://git-scm.com/)
* **Yarn** ou **npm** (gerenciador de pacotes)

---

## ⚙️ Passo a Passo para Configuração do Ambiente

Para executar os testes, é necessário ter a aplicação **RWA (Front-end e Back-end)** rodando localmente, além deste projeto de testes.

### 1. Clonar e Iniciar a Aplicação RWA (Aplicação Alvo)

Em um terminal separado, clone o repositório oficial da aplicação RWA e inicie os servidores:

```bash
# Clone o repositório do RWA
git clone https://github.com/LuizQA91/RWA.git

# Acesse a pasta do RWA
cd RWA

# Instale as dependências
yarn install

# Inicie a aplicação (Front-end na porta 3000 e Back-end na porta 3001)
yarn dev
```

> ⚠️ **Nota:** Mantenha este terminal aberto. A aplicação estará pronta para uso assim que a URL `http://localhost:3000` estiver acessível no navegador.

---

### 2. Clonar e Configurar o Projeto de Testes

Abra **outro terminal** para clonar e instalar este repositório de testes:

```bash
# Clone este repositório
git clone https://github.com/LuizQA91/cypress-rwa-tests.git

# Acesse a pasta do projeto
cd cypress-rwa-tests

# Instale as dependências
yarn install
```

---

## 🚀 Executando os Testes e Gerando Relatórios

Com a aplicação RWA rodando no `http://localhost:3000`, execute os testes e gere os relatórios do Allure utilizando as opções abaixo:

> ⚠️ **Nota:** Os comandos estão configurados via script no arquivo package.json, então basta digitar um dos comandos abaixo.

### ⚙️ Configuração de Variáveis de Ambiente

Antes de executar os testes, crie o arquivo `.env` baseado no modelo fornecido:

```bash
cp .env.example .env
```

### 🎭 Modo Interativo (Interface Gráfica do Cypress)

Abre o Test Runner do Cypress para acompanhar visualmente a execução em tempo real:

```bash
yarn open
```

### ⚡ Modo Headless (Execução Silenciosa no Terminal)

Roda toda a suíte de testes em segundo plano direto no terminal:

```bash
yarn test
```

### 📈 Execução de Testes com Gerador de Relatório Allure

Execute os testes habilitando a coleta de dados do Allure:

```bash
yarn allure
```

### 🎯 Executar Apenas um Arquivo Específico

Para executar um spec isolado via terminal:

```bash
yarn cypress run --spec "cypress/e2e/NOME_DO_TESTE.cy.js"
```

---

## 📂 Estrutura do Projeto

```text
├── .github/             # Workflows do GitHub Actions (CI/CD)
├── cypress/
│   ├── e2e/             # Arquivos de testes agrupados por funcionalidade
│   ├── fixtures/        # Massas de dados estáticas (JSON)
│   ├── pages/           # Mapeamento de elementos e ações das páginas (Page Objects)
│   └── support/         # Comandos customizados (commands.js) e configurações globais (e2e.js)
├── .gitignore           # Arquivos e pastas ignorados pelo Git
├── cypress.config.js    # Configurações globais do Cypress
├── eslint.config.mjs    # Arquivo de configuração de regras e padronização do ESLint
├── package-lock.json    # Mapeamento exato da árvore de dependências (npm)
├── package.json         # Dependências, scripts e metadados do projeto
├── README.md            # Documentação principal do projeto
└── yarn.lock            # Mapeamento exato da árvore de dependências (Yarn)

```

---

## 📄 Licença

Este projeto é mantido sob a licença [MIT](./LICENSE).
