const { defineConfig } = require("cypress");
require("dotenv").config(); 

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://gflenv.com/",
    viewportWidth: 1920,
    viewportHeight: 1080,
    experimentalOriginDependencies: true,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "reports",
      html: true,
      json: true,
      charts: true,
    },
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      config.env.USER_EMAIL = process.env.USER_EMAIL;
      config.env.USER_PASSWORD = process.env.USER_PASSWORD;
      return config;
    },
  },
});
