import {Alert} from '../../pages/HomeWork/DemoQAAlerts';
describe('DEMOQAALERT', () => {
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    });
    beforeEach(() => {
        Alert.visit();
    });
    it('Click Button to see alert', () => {
        Alert.alert();
    });
    it('On button click, alert will appear after 5 seconds', () => {
        Alert.alertDelay();
    });
    it('On button click, confirm box will appear/Ok',()=>{
        Alert.confirmOk();
    })
    it('On button click, confirm box will appear/Cancel',()=>{
        Alert.confirmCancel();
    })
    it('On button click, prompt box will appear',()=>{
        Alert.promptOk();
    })
    it('On button click, prompt box will appear/Cancel', () => {
        Alert.promptCancel();
    });
});