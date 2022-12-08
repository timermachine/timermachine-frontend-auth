const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // baseUrl: 'http://localhost:3000', //default. set from package.json script calls.
    watchForFileChanges: false,
    defaultCommandTimeout: 1000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});