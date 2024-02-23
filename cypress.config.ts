import { defineConfig } from "cypress";

const xlsx = require("node-xlsx").default;
const fs = require("fs"); // for file
const path = require("path")

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

      //reading excel document from fixture
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
    },
    env: {
      stage: "https://stage.pasv.us",
      prod: "https://stage.pasv.us/course",
      test: "Hello World!",
      base: "http://uitestingplayground.com/home",
      homeWork: "https://play1.automationcamp.ir",
      demoQA: "https://demoqa.com",
      herokuapp: "https://the-internet.herokuapp.com",
      email: "kvazipops@mail.ru",
      password: "qwerty1234"
    },
  },

  retries: {
    runMode: 3,
    openMode: 2,
  },

  defaultCommandTimeout: 5000,
});
