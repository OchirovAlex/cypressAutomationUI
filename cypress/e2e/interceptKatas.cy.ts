describe('HOMEWORK INTERCEPT', () => {
    it('intercept', function() {
        cy.fixture('katas.json').as('data');
        cy.intercept(`https://server-stage.pasv.us/progress/codewars/completed/${this.userId}`,{fixture: "katas.json"}).as('katas');
        cy.intercept('POST','*/login').as('login');
        cy.visit(`${Cypress.env('stage')}/user/login`);
        cy.get('#normal_login_email').type(Cypress.env('email'));
        cy.get('#normal_login_password').type(Cypress.env('password'),{log: false});
        cy.get('button[type="submit"]').click();
        cy.wait('@login').then(res=>{
            let id = res.response.body.payload.user._id;
            cy.wrap(id).as('userId');
        });
        cy.get('div').contains('Katas').click();
        //cy.visit(`${Cypress.env('stage')}/profile/${this.userId}/katas`);
        cy.wait('@katas').then(res=>{
            cy.wrap(this.data).should('deep.equal',res.response.body);
            cy.location().should(loc=>{
                expect(loc.href).to.eq(`https://stage.pasv.us/profile/${this.userId}/katas`);
            })
        })
    });
});