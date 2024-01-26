describe("textBox", ()=>{
    it("test", ()=>{
        cy.visit("https://uitestingplayground.com/textinput")
        cy.get("#newButtonName").type("Hello guys")
        cy.get("#updatingButton").click()
        cy.contains("button", "Hello guys")
        cy.get("#updatingButton").should("have.text", "Hello guys")
        cy.get("#updatingButton").then(element=>{
            expect(element.text()).to.equal("Hello guys")
        })
    })
})
