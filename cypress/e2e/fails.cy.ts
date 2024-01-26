import 'cypress-iframe';
describe('Test an alert and the text displaying', function() {
    beforeEach(() => {
        cy.visit(Cypress.env('homeWork'))
    });
    it('iframe', () => {
        cy.get('#wait_for_frame').click();
        cy.iframe().find('#inner_button').click();
        cy.iframe().find('#inner_button').should('have.text','Clicked');
    })
    it('confirm cancel', () => {
        cy.on('window:confirm', () => {
            return false;
        });
        cy.get('#prompt_trigger').click().wait(5000)
        cy.get('#confirm_cancelled_badge').should('have.text','Cancelled');    
    });
})
