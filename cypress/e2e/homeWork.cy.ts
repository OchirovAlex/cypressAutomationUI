import "cypress-iframe";

describe("HOMEWORK", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("homeWork"));
  });
  it.only("alert", (done) => {
    cy.on("window:alert", (text) => {
      expect(text).to.eq("I am alerting you!");
      done();
    });
    cy.get("#alert_trigger").click();
//    cy.get("#alert_handled_badge").should("have.text", "Alert \n                                handled");
    cy.get("#alert_handled_badge").should("include.text", "handled");
  });
  it("confirm OK", (done) => {
    cy.on("window:confirm", (text) => {
      expect(text).to.eq("Choose wisely...\nIt's your life!");
      done();
    });
    cy.get("#prompt_trigger").click();
    cy.get("#confirm_ok_badge").should("have.text", "OK");
  });
  it("confirm cancel", () => {
    cy.on("window:confirm", () => {
      return false;
    });
    cy.get("#prompt_trigger").click();
    cy.get("#confirm_cancelled_badge")
      .should("have.text", "Cancelled")
      .and("be.visible");
  });
  it("Wait for element to be visible", () => {
    cy.get(".popover-header").should("not.exist");
    cy.get("#visibility_trigger").contains("button", "Trigger").click();
    cy.get("#visibility_target")
      .should("have.text", "Click Me")
      .and("be.visible")
      .click();
    cy.get(".popover-header")
      .should("be.visible")
      .and("have.text", "Can you see me?");
    cy.get(".popover-body").then((element) => {
      expect(element.text()).to.equal("I just removed my invisibility cloak!!");
    });
    cy.get("#visibility_target").click();
    cy.get(".popover-header").should("not.exist");
  });
  it("Wait for element to be Invisible", () => {
    cy.get("#invisibility_target").should("be.visible");
    cy.get("#invisibility_trigger").contains("button", "Trigger").click();
    cy.get(".spinner-border.spinner-border-sm.mr-2").should("be.visible");
    cy.get("button.btn.btn-primary").should("include.text", "Waiting");
    cy.get("#spinner_gone").should(
      "have.text",
      "Thank God that spinner is gone!"
    );
    cy.get("#invisibility_target").should("not.be.visible").and("exist");
  });
  it("el to be enabled", () => {
    cy.get("#enabled_target")
      .should("include.text", "Disabled")
      .and("not.be.enabled")
      .and("have.css", "background-color", "rgb(255, 0, 57)");
    cy.get("#enabled_trigger").contains("button", "Trigger").click();
    cy.get("#enabled_target")
      .should("include.text", "Enabled")
      .and("have.css", "background-color", "rgb(63, 182, 24)")
      .click();
    cy.get(".popover-header").should("include.text", "active");
    cy.get(".popover-body").should("have.text", "See, you just clicked me!!");
  });
  it("Wait for Page Title to change", () => {
    cy.get("title").should("have.text", "Wait Conditions");
    cy.get("#page_title_trigger").click();
    cy.get("title").should("have.text", "My New Title!");
  });
  it("Wait for text/value to have specific values", () => {
    cy.get("#wait_for_text").should("be.enabled").click();
    cy.get("#wait_for_value").should(
      "have.attr",
      "placeholder",
      "Creator of C"
    );
    cy.get(".spinner-grow.spinner-grow-sm").should("be.visible");
    cy.get("#text_value_trigger").click();
    cy.get("#wait_for_text").should("have.text", "Submit").and("be.enabled");
    cy.get(".spinner-grow.spinner-grow-sm").should("not.be.true");
    cy.get("#wait_for_value").should("have.value", "Dennis Ritchie");
  });
  it("Wait for frame to be available and then switch to it", () => {
    cy.get("#wait_for_frame").click();
    cy.iframe()
      .find("#inner_button")
      .should("have.text", "Inner Button")
      .and("be.enabled")
      .and("have.css", "background-color", "rgb(39, 128, 227)")
      .click();
    cy.iframe()
      .find("#inner_button")
      .should("have.text", "Clicked")
      .and("be.enabled")
      .and("have.css", "background-color", "rgb(55, 58, 60)");
  });
});
