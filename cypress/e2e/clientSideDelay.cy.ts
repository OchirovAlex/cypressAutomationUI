describe('CLIENT SIDE DELAY', () => {
    it('test', () => {
        cy.visit('/clientdelay');
        cy.get('#ajaxButton').should('be.visible').and('exist').click();
        cy.get('#spinner').should('be.visible');
        cy.get('.bg-success').should('have.text', 'Data calculated on the client side.')
    });
});