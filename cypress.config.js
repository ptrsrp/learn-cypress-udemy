module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern:"cypress/integration/**/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false
  },
  //insert video folder
  "video": true
};
