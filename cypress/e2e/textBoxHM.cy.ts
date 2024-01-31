import {TextBox} from "../../pages/TextBox";

describe('textBox', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/text-box`);
    });
    it('submit', ()=>{
        cy.get('#userName').type('Jerry Smith');
        cy.get('#userEmail').type('example@gmail.com');
        cy.get('#currentAddress').type('not permanent address');
        cy.get('#permanentAddress').type('permanent address');
        cy.get('#submit').click();
        // cy.get('p#name').should('include','Jerry');
        // cy.get('p#email').should('include','example');
        // cy.get('p#currentAddress').should('include','not');
        // cy.get('p#permanentAddress').should('include','permanent');
    })
    it('submit with PageObject', () => {
        TextBox.textBoxSubmit();
    })
})
