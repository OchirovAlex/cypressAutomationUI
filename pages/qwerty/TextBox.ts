class Text{
    userName: string = '#userName';
    userEmail: string = '#userEmail';
    current: string = '#currentAddress';
    permanent: string = '#permanentAddress';
    submitBtn: string = '#submit';

    textBoxSubmit(){
        cy.get(this.userName).type('Jerry Smith');
        cy.get(this.userEmail).type('example@gmail.com');
        cy.get(this.current).type('not permanent address');
        cy.get(this.permanent).type('permanent address');
        cy.get(this.submitBtn).click();
    }
}

export const TextBox = new Text();