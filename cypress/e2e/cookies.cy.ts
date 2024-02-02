import { LoginPage } from "../../pages/Login";
//Cypress.session.clearAllSavedSessions()
describe('COOKIES', ()=>{
    beforeEach(()=>{
        cy.session('myCurrentSession', ()=>{
            cy.visit(`${Cypress.env('demoQA')}/login`)
            LoginPage.submitButtonLogin();
            cy.wait(4000);
        })
    })
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    });
    it('create cookies with PageObject', () => {
        cy.visit(`${Cypress.env('demoQA')}/login`)
        cy.url().then((url)=>{
            cy.log(url);
        })
    });
    it('create cookies with PageObject', () => {
        cy.visit(`${Cypress.env('demoQA')}/login`)
    });
})