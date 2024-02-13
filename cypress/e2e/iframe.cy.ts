import {IframePage} from '../../pages/Iframe';
import {IframeAppPage} from '../../pages/IframeApp';
describe('IFRAME', () => {
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    });
    beforeEach(() => {
        IframePage.visit();
    });
    it('test iframe', () => {
        IframePage.getIframe();
    });
});
describe.only('IFRAMEAPP', () => {
    beforeEach(() => {
        IframeAppPage.visit();
    });
    it('test iframe with extensions', () => {
        IframeAppPage.getIframe();
    });
});