const textName = 'Cypress';

describe('textBox', () => {
    beforeEach(() => {
        cy.visit('/textinput')
    });
    it('Verify this button', () => {
        cy.get('[id=\'newButtonName\']').type(textName)
        cy.contains('button', 'Button That Should').click()
        cy.get('.btn-primary').then(element=>{
            console.log(element.text(), 'text')
            cy.log(textName)
            cy.wrap(element).should('have.text', textName)

        })
        cy.get('.form-group').within(text=>{
            console.log(text.text(), 'text')
            cy.get('[type="button"]').should('have.text', textName)
        })
    });
});