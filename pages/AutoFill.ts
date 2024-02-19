class AutoFill{
    private inputField:string = '.auto-complete__value-container';
    private dropDown:string = '#react-select-2-option-0';
    private result:string = '.auto-complete__multi-value__label'

    visit(){
        cy.visit(`${Cypress.env('demoQA')}/auto-complete`,{timeout:10000});
    }

    autoComplete(){
        let obj = {
            Y: "Yellow"
        }
        cy.get(this.inputField).first().type(Object.keys(obj)[0]);
        cy.get(this.dropDown).should('have.text',Object.values(obj)[0]).click();
        //cy.get(this.result).should('have.text',Object.values(obj)[0]);
        cy.get(this.result).should('have.text','qwerty');
    }
}
export const autoFill = new AutoFill()