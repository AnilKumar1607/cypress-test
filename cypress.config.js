const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cjumhm',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
