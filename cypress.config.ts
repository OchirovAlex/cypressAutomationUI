import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: 'https://uitestingplayground.com',
        setupNodeEvents(on, config) {
          // implement node event listeners here
        },
        env:{
            stage:'https://stage.pasv.us/user/login',
            prod:'https://stage.pasv.us/course',
            test: 'Hello World!',
            base:'http://uitestingplayground.com/home',
            homeWork: 'https://play1.automationcamp.ir/expected_conditions.html',
            demoQA: 'https://demoqa.com',
            herokuapp: 'https://the-internet.herokuapp.com'
        }
    },

    defaultCommandTimeout:16000,
});
