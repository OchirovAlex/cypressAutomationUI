import {AlertPage} from '../../pages/Alert'
import 'cypress-real-events'
describe('ALERT', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('herokuapp')}/javascript_alerts`);
    });
    it('Click for JS Alert', () => {
        AlertPage.alert();
    });
    it('Click for JS Confirm/Ok',()=>{
        AlertPage.confirmOK();
    })
    it('Click for JS Confirm/Cancel',()=>{
        AlertPage.confirmCancel();
    })
    it('Click for JS Prompt',()=>{
        AlertPage.promptHello();
    })
    it('Click for JS Prompt/Null',()=>{
        //AlertPage.promptNull();
        cy.window().then((win)=>{
            //cy.stub(win,'prompt').returns(null);
            cy.get('button[onclick="jsPrompt()"]').click();
            cy.realType('{esc}');
            cy.get('#result').should('have.text','You entered: '+null);
        })
    })
});