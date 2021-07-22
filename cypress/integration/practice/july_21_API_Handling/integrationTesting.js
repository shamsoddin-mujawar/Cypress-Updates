describe(' Integration Testing with Front end and Back End response validation assertions', ()=>{
    it('first test case',()=>{
        cy.visit('https://www.rahulshettyacademy.com/angularAppdemo/')

        cy.intercept({
            method: 'GET',
            url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },{

            statuscode:200,
            body:[{
                    "book_name":"RestAssured with samir",
                    "isbn":"RSU",
                    "aisle":"1997"
            }]
        }).as('bookRetrievals') 
        cy.get(".btn-primary").click()
        // cy.wait() after resolve promise return two properties (request and response)
        cy.wait('@bookRetrievals').should(({request, response})=>{
            // body length becoz it contains array we can find length of an array by length.
            cy.get('tr').should('have.length', response.body.length+1)
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })
})