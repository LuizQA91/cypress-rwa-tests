const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: 'http://localhost:3000',
    env: {
      apiUrl: 'http://localhost:3001'
    },
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});