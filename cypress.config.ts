import { defineConfig } from "cypress";
export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: true,
  screenshotOnRunFailure: true,
  reporterOptions: {
    charts: true,
    reportPageTitle: "Lecture",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    baseUrl: "https://uitestingplayground.com",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    env: {
      stage: "https://stage.pasv.us/user/login",
      prod: "https://stage.pasv.us/course",
      test: "Hello World!",
      base: "http://uitestingplayground.com/home",
      homeWork: "https://play1.automationcamp.ir",
      demoQA: "https://demoqa.com",
      herokuapp: "https://the-internet.herokuapp.com",
    },
  },

  retries: {
    runMode: 3,
    openMode: 2,
  },

  defaultCommandTimeout: 5000,
});
