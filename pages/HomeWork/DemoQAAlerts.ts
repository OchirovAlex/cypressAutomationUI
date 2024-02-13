class DemoQAAlert{
    private alertBtn:string = '#alertButton';
    private alertDelayBtn:string = '#timerAlertButton';
    private confirmBtn:string = '#confirmButton';
    private promptBtn:string = '#promtButton';
    private alertText:string = 'You clicked a button';
    private alertDelayText:string = 'This alert appeared after 5 seconds';
    private confirmText:string = 'Do you confirm action?';
    private confirmResult:string = '#confirmResult';
    private confirmResultTextOk:string = 'You selected Ok';
    private confirmResultTextCancel:string = 'You selected Cancel';
    private promptResult:string = '#promptResult';
    private promptResultText:string = 'You entered '

    alert(){
        cy.on('window:alert',(text)=>{
            expect(text).to.eq(this.alertText);
        })
        cy.on('window:confirm',()=>true);
        cy.get(this.alertBtn).click();
    }
    alertDelay(){
        cy.on('window:alert',(text)=>{
            expect(text).to.eq(this.alertDelayText);
        })
        cy.on('window:confirm',()=>true);
        cy.get(this.alertDelayBtn).click();
    }
    confirmOk(){
        cy.on('window:alert',(text)=>{
            expect(text).to.eq(this.confirmText);
        })
        cy.on('window:confirm',()=>true);
        cy.get(this.confirmBtn).click();
        cy.get(this.confirmResult).should('have.text',this.confirmResultTextOk);
    }
    confirmCancel(){
        cy.on('window:confirm',()=>false);
        cy.get(this.confirmBtn).click();
        cy.get(this.confirmResult).should('have.text',this.confirmResultTextCancel);
    }
    promptOk(){
        const text:string = 'ZXC'
        cy.window().then(win=>{
            cy.stub(win,'prompt').returns(text);
            cy.get(this.promptBtn).click();
            cy.get(this.promptResult).should('have.text',this.promptResultText+text);
        })
    }
    promptCancel(){
        cy.window().then(win=>{
            cy.stub(win,'prompt').returns(null);
            cy.get(this.promptBtn).click();
            cy.get(this.promptResultText).should('not.exist');
        })
    }
}

export const Alert = new DemoQAAlert();