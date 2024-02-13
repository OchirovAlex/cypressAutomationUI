import {IframePlayG} from '../../pages/HomeWork/IframePG'
describe('IFRAME', () => {
    beforeEach(() => {
        IframePlayG.visit();
    });
    it('just iframe', () => {
        IframePlayG.getIframe();
    });
    it.only('iframe with plugin',()=>{
        IframePlayG.getIframePlugin();
    })
});