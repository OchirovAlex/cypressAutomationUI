import {autoFill} from '../../pages/AutoFill'

describe('AUTOFILL', () => {
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    });
    beforeEach(() => {
        autoFill.visit();
    });
    it('verify that autofill is working', () => {
        autoFill.autoComplete();
    });
});