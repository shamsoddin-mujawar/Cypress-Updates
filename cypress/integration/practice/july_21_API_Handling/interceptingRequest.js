describe(' Intercepting HTTP request details to test Security Scenarios',()=>{
    it('',()=>{
        cy.visit('https://www.rahulshettyacademy.com/angularAppdemo/')
        // following this syntax:
        // cy.intercept(method, url, routeHandler)

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>{
            // changed the url : purpose to check security
            req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'

            req.continue((res)=>{
                // expect(res.statusCode).to.equal(200)
            })
        }).as('dummyUrl')
        cy.get(".btn-primary").click()
        cy.wait('@dummyUrl')
    })
})