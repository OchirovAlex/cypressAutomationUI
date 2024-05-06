class IframePG {
  private iframe1: string = "#frame1";
  private iframe2: string = "#frame2";
  private iframe3: string = "#frame3";
  private iframe4: string = "#frame4";
  private btn1: string = "#click_me_1";
  private btn2: string = "#click_me_2";
  private btn4: string = "#click_me_4";
  private body: string = "body";
  private btn1Text: string = "Click Me 1";
  private btn2Text: string = "Click Me 2";
  private btn4Text: string = "Click Me 4";
  private btnClicked: string = "Clicked";
  private h3Text: string = "Switch to the frames above and click the buttons.";
  private h3: string = "h3";

  visit() {
    cy.visit(`${Cypress.env("homeWork")}/frames.html`);
  }
  getIframe() {
    cy.get(this.iframe1).then((Iframe) => {
      const body = Iframe.contents().find(this.body);
      cy.wrap(body).find(this.h3).should("have.text", this.h3Text);
      cy.wrap(body).find(this.btn1).should("have.text", this.btn1Text).click();
      cy.wrap(body).find(this.btn1).should("have.text", this.btnClicked);
      cy.wrap(body)
        .find(this.iframe2)
        .then((Iframe2) => {
          const body = Iframe2.contents().find(this.body);
          cy.wrap(body)
            .find(this.btn2)
            .should("have.text", this.btn2Text)
            .click();
          cy.wrap(body).find(this.btn2).should("have.text", this.btnClicked);
        });
      cy.wrap(body)
        .find(this.iframe3)
        .then((Iframe3) => {
          const body = Iframe3.contents().find(this.body);
          cy.wrap(body)
            .find(this.iframe4)
            .then((Iframe4) => {
              const body = Iframe4.contents().find(this.body);
              cy.wrap(body)
                .find(this.btn4)
                .should("have.text", this.btn4Text)
                .click();
              cy.wrap(body)
                .find(this.btn4)
                .should("have.text", this.btnClicked);
            });
        });
    });
  }
  getIframePlugin() {
    cy.iframe(this.iframe1).then((Iframe1) => {
      cy.wrap(Iframe1).find(this.h3).should("have.text", this.h3Text);
      cy.wrap(Iframe1)
        .find(this.btn1)
        .should("have.text", this.btn1Text)
        .click();
      cy.wrap(Iframe1).find(this.btn1).should("have.text", this.btnClicked);
      cy.wrap(Iframe1)
        .find(this.iframe2)
        .then((Iframe2) => {
          const body = Iframe2.contents();
          cy.wrap(body)
            .find(this.btn2)
            .should("have.text", this.btn2Text)
            .click();
          cy.wrap(body).find(this.btn2).should("have.text", this.btnClicked);
        });
      cy.wrap(Iframe1)
        .find(this.iframe3)
        .then((Iframe3) => {
          const body = Iframe3.contents();
          cy.wrap(body)
            .find(this.iframe4)
            .then((Iframe4) => {
              const body = Iframe4.contents();
              cy.wrap(body)
                .find(this.btn4)
                .should("have.text", this.btn4Text)
                .click();
              cy.wrap(body)
                .find(this.btn4)
                .should("have.text", this.btnClicked);
            });
        });
    });
  }
}
export const IframePlayG = new IframePG();
