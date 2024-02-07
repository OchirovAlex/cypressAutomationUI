class LocalCodingLogin {
    email:string = '#normal_login_email';
    password:string = '#normal_login_password';
    button:string = 'button[type="submit"]';
    
    localCodingLogin(email:string, password:string):void{
        cy.get(this.email).type(email);
        cy.get(this.password).type(password, {log: false});
        cy.get(this.button).click();
    }
} 

export const LCLogin = new LocalCodingLogin();