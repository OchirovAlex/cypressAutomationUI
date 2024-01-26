describe('WebSite', () => {
    beforeEach(()=>{
        cy.visit('/home')
    })
    it('Verify page', () => {
        cy.title().should('eq','UI Test Automation Playground')
    });
    it('Verify page', () => {
        cy.window().title().then(element=>{
            cy.log(element)
            expect(element).to.be.eq('UI Test Automation Playground')
            expect(element === 'UI Test Automation Playground').to.be.true
            cy.wrap(element).should('eq','UI Test Automation Playground')
        })
    });
});

