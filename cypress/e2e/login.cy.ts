import { LoginPage } from "../../pages/Login";
describe("LoginPage", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
  it("login", () => {
    cy.get("#userName").type("test");
    cy.get("#password").type("Test1234*");
    cy.get("#login").click();
    cy.contains("Log out");
  });
  it("login with PageObject", () => {
    LoginPage.submitButtonLogin();
    cy.contains("Log out");
  });
});
