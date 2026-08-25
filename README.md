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

## 💻 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado na sua máquina:

* **Node.js** (Versão 18.x ou superior) — [Download](https://nodejs.org/)
* **Git** — [Download](https://git-scm.com/)
* **Yarn** ou **npm** (gerenciador de pacotes)

---

## ⚙️ Passo a Passo para Configuração do Ambiente

Para executar os testes, é necessário ter a aplicação **RWA (Front-end e Back-end)** rodando localmente, além deste projeto de testes.

### 1. Clonar e Iniciar a Aplicação RWA (Aplicação Alvo)

Em um terminal separado, clone o repositório oficial da aplicação RWA e inicie os servidores:

```bash
# Clone o repositório do RWA
git clone https://github.com/cypress-io/cypress-realworld-app.git

# Acesse a pasta do RWA
cd cypress-realworld-app

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
npm install
```

---

## 🚀 Executando os Testes

Com a aplicação RWA rodando no `http://localhost:3000`, execute os testes utilizando uma das opções abaixo:

### 🎭 Modo Interativo (Interface Gráfica do Cypress)

Abre o Test Runner do Cypress para acompanhar visualmente a execução em tempo real:

```bash
npx cypress open
```

### ⚡ Modo Headless (Execução Silenciosa no Terminal)

Roda toda a suíte de testes em segundo plano direto no terminal:

```bash
npx cypress run
```

### 🎯 Executar Apenas um Arquivo Específico

Para executar um spec isolado via terminal:

```bash
npx cypress run --spec "cypress/e2e/NOME_DO_TESTE.cy.js"
```

---

## 📂 Estrutura do Projeto

```text
├── cypress/
│   ├── e2e/               # Arquivos de testes agrupados por funcionalidade
│   ├── fixtures/          # Massas de dados estáticas (JSON)
│   ├── pages/             # Mapeamento de elementos e ações das páginas (Page Objects)
│   ├── screenshots/       # Capturas de tela geradas durante falhas ou testes
│   └── support/           # Comandos customizados (commands.js) e configurações globais (e2e.js)
├── .gitignore             # Arquivos e pastas ignorados pelo Git
├── cypress.config.js      # Configurações globais do Cypress
├── package-lock.json      # Mapeamento exato da árvore de dependências
├── package.json           # Dependências e scripts do projeto
└── README.md              # Documentação do projeto
```

---

## 📄 Licença

Este projeto é mantido sob a licença [MIT](./LICENSE).
