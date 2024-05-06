import {IframePlayG} from '../../pages/qwerty/IframePG'
describe('IFRAME', () => {
    beforeEach(() => {
        IframePlayG.visit();
    });
    it('just iframe', () => {
        IframePlayG.getIframe();
    });
    it('iframe with plugin',()=>{
        IframePlayG.getIframePlugin();
    })
});