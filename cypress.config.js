const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: 'http://localhost:3000',
    env: {
      apiUrl: 'http://localhost:3001'
    },
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});