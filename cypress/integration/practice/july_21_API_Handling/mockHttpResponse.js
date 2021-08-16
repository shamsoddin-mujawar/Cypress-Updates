describe(' Mock HTTP Responses for generating Stub Data to test edge Scenarios',function(){
    it('Test case 1', function () {
        cy.visit('https://www.rahulshettyacademy.com/angularAppdemo/')

        cy.intercept(
            // request
            {
            method: 'GET',
            url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        // response
        {
            // here we mock the response as we want. means change in the response data.
            statuscode:200,
            body:[{
                    "book_name":"RestAssured with samir",
                    "isbn":"RSU",
                    "aisle":"1997"
            }]
        }).as('bookRetrievals') // intercept method yeild the promise that promise store into the as.
        cy.get(".btn-primary").click()
        cy.wait('@bookRetrievals')   // wait untill resolve the promise.to making our test synchronise
        cy.get('p').should('have.text', 'Oops only 1 Book available')

    })
})