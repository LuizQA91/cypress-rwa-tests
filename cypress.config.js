const { defineConfig } = require('cypress');
require('dotenv').config();
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
      config.env = {
        ...config.env,
        users: {
          validUser: {
            name: process.env.CYPRESS_VALID_USER_NAME,
            username: process.env.CYPRESS_VALID_USER_USERNAME,
            password: process.env.CYPRESS_VALID_USER_PASSWORD,
          },
        }
      };
      allureWriter(on, config);
      return config;

    },
  }

});