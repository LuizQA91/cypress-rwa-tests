const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    env: {
      apiUrl: 'http://localhost:3001'
    },
    defaultCommandTimeout: 10000,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});