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
    it.only('confirm cancel', () => {
        cy.on('window:confirm', (text) => {
            expect(text).to.eq("Choose wisely...\nIt's your life!")
        });
        cy.get('#prompt_trigger').click().wait(5000)
        cy.get('#confirm_cancelled_badge').should('have.text','Cancelled');    
    });
})
