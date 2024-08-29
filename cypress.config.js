const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://api.trello.com/1',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //api key e apiTojken indispensáveis para realizar conexão com a conta no trello
    env: {
      apiKey: '8316e2888766596b2e87f0900b5018fd',
      apiToken: 'ATTA9c1bcc64823c80b0aab61a465311a455e33829f2f66c8409b0288435eeeec082E35539DC'
    }
  },
});
