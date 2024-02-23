describe('EXCEL', function(){
    it('reading excel', () => {
        cy.readingXlsx('cypress/fixtures/excelData.xlsx').then(data=>{
            console.log(data)
            console.log(data[0])
            console.log(data[0].data[0])
            console.log(data[0].data[1])
            console.log(data[0].data[2])
        })
    });

    it('write data to json doc', () => {
        cy.readingXlsx('cypress/fixtures/excelData.xlsx').then(data=>{
            cy.writeFile('cypress/fixtures/login.json',{
                email: Cypress.env('email'),
                password: Cypress.env('password')
            });
        })
    });

    it('use json doc to login', function() {
        cy.readingXlsx('cypress/fixtures/excelData.xlsx').then(data=>{
            cy.fixture('login.json').then(login=>{
                cy.apiLogin(login.email,login.password).then(res=>{
                    cy.wrap(res.body.payload.user._id).as('userId');
                });
            });
        });
        cy.visit(`${Cypress.env('stage')}/profile/${this.userId}`);
        cy.contains('Aleksandr Ochirov');
    });
});