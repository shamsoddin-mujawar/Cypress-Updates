describe('Automating Rahulshetty.com', function () {
    it('First test case', function () {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('input.search-keyword').type('ca')
        cy.wait(2000);

        // first way to find lngth of an element
        cy.get('h4.product-name').should('have.length', 4)

        // find method find descendant of given element.
        // use an alias 
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').should('have.length', 4)

        // click on 2nd ADD TO CART button
        cy.get('@productlocator').find('.product').eq(1).contains('ADD TO CART').click()
        cy.log('click on add to cart second button');

        cy.get('@productlocator').find('.product').each(($element, $index, $list) => {
            const textVeg = $element.find('h4.product-name').text();
            console.log("value of text veg is :",textVeg) // this will print webbrowser console.
            if (textVeg.includes('Cashews')) {
                $element.find('button').trigger('click');
                cy.log('click on add to cart by Arrow Function');
            }
        })

        // assertion for logo text
        cy.get('.brand').should("have.text", 'GREENKART')

        //using arrow function
        cy.get('.brand').then((logo_name =>{
            cy.log(logo_name.text())
            cy.log(" arrow function")
        }))
    })
})