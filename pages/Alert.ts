import 'cypress-real-events'
class Alert{
    private alertBtn:string = 'button[onclick="jsAlert()"]';
    private confirmBtn:string = 'button[onclick="jsConfirm()"]';
    private promptBtn:string = 'button[onclick="jsPrompt()"]';
    private result:string = '#result';
    private alertText:string = 'I am a JS Alert';
    private alertResult:string = 'You successfully clicked an alert';
    private confText:string = 'I am a JS Confirm';
    private confRes:string = 'You clicked: Ok';
    private confCancel:string = 'You clicked: Cancel';
    private promptResultText:string = 'You entered: ';

    alert(){
        cy.on('window:alert',(text)=>{
            expect(text).to.eq(this.alertText);
        })
        cy.get(this.alertBtn).click();
        cy.on('window:confirm',()=>true)
        cy.get(this.result).should('have.text',this.alertResult);
    }
    confirmOK(){
        cy.on('window:confirm',(text)=>{
            expect(text).to.eq(this.confText);
        })
        cy.on('window:confirm',()=>true)
        cy.get(this.confirmBtn).click();
        cy.get(this.result).should('have.text',this.confRes)
    }
    confirmCancel(){
        cy.on('window:confirm',()=>false)
        cy.get(this.confirmBtn).click();
        cy.get(this.result).should('have.text',this.confCancel);
    }
    promptHello(){
        const text = 'Hello';
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns(text);
            cy.get(this.promptBtn).click();
        });

        cy.get(this.result).should('have.text',this.promptResultText+text);
    }
    promptNull(){
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns(null);
            cy.get(this.promptBtn).click();
            //cy.realType('{esc}');
            cy.get(this.result).should('have.text',this.promptResultText+null);
        })
    }
}

export const AlertPage = new Alert();