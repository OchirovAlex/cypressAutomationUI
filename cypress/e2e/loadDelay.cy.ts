describe('LOAD DELAY', () => {

    it('load delay emulate failing', () => {
        cy.visit(Cypress.env('stage'),{timeout: 4000});
    });
    it('load delay emulate', () => {
        cy.visit('/',{timeout: 16_000});
        cy.get('[href="/loaddelay"]').click();
        cy.contains('button', 'Button Appearing After Delay');
    });
});