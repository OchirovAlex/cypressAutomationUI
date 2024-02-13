import { LoginPage } from "../../pages/Login";
describe("LoginPage", () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
  it.only("login", () => {
    // cy.get("#userName").type("test");
    // cy.get("#password").type("Test1234*");
    // cy.get("#login").click();
    cy.login("test", "Test1234*");
    cy.contains("Log out");
  });
  it("login with PageObject", () => {
    LoginPage.submitButtonLogin();
    cy.contains("Log out");
  });
});
