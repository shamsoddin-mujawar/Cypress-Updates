describe("login test",  () => {
    it("testing app", () =>{
        cy.log("testing hubspot site and login the page")
        cy.visit('https://classic.crmpro.com/index.html')
        cy.get('input[name="username"]').type('shamsoddin.21@gmail.com')
        cy.get('input[name="password"]').type('Samir@123')
        cy.get('input[type="submit"]').click()
        cy.log("login done")

    })
})