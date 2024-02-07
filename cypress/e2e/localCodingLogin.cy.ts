import {LCLogin} from '../../pages/localCoding/LocalCoding';
describe('LOGIN', () => {
    beforeEach(() => {
        cy.session('firstSession', ()=>{
            cy.visit(Cypress.env('stage'));
            LCLogin.localCodingLogin(Cypress.env('email'), Cypress.env('password'));
        },{cacheAcrossSpecs: true})
    });
    it('loginPage', () => {
        cy.visit(Cypress.env('prod'));
    });
});