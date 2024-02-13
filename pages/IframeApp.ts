class IframeApp{
    private iframe:string = '#mce_0_ifr';

    getIframe(){
        cy.frameLoaded(this.iframe);
        cy.iframe(this.iframe).then(iframeApp=>{
            cy.wrap(iframeApp).type('{selectAll}{del}').type('Cypress');
            cy.wrap(iframeApp).clear().type('Hello js');
        })
    }
    visit(){
        cy.visit(`${Cypress.env('herokuapp')}/iframe`);
    }
}

export const IframeAppPage = new IframeApp();