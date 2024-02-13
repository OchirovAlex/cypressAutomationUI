import { TextBox } from "../../pages/HomeWork/TextBox";

describe("textBox", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/text-box`);
  });
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });
  it("submit", () => {
    cy.get("#userName").type("Jerry Smith");
    cy.get("#userEmail").type("example@gmail.com");
    cy.get("#currentAddress").type("not permanent address");
    cy.get("#permanentAddress").type("permanent address");
    cy.get("#submit").click();
    cy.get("#name").should("include.text", "Jerry");
    cy.get("#email").should("include.text", "example");
    cy.get("#currentAddress.mb-1").should(
      "have.text",
      "Current Address :not permanent address "
    );
    cy.get("#permanentAddress.mb-1").should("include.text", "permanent");
  });
  it("submit with PageObject", () => {
    TextBox.textBoxSubmit();
    cy.get("#name").should("include.text", "Jerry");
    cy.get("#email").should("include.text", "example");
    cy.get("#currentAddress.mb-1").should("include.text", "not");
    cy.get("#permanentAddress.mb-1").should("include.text", "permanent");
  });
});
