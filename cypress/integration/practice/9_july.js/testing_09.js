describe('Automating Rahulshetty.com', function () {
    it('First test case', function () {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.log("actual url is :")
        cy.get('input.search-keyword').type('ca')
        cy.wait(2000);

        // first way to find length of an element
        // cy.get('.product').should('have.length', 4)
        // second way
        cy.get('.product:visible').should('have.length', 4)

        //third way
        cy.get('h4.product-name').should('have.length', 4)

        // find method find descendant of given element.
        // use an alias 
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').should('have.length', 4)

        // click on 2nd ADD TO CART button
        cy.get('@productlocator').find('.product').eq(1).contains('ADD TO CART').click()
        cy.log('click on add to cart second button');

        // click on ADD TO CART button if specific text match.
        // find()  is scope specific. if you have entered selector of parent and child it's work only that scope. 

        cy.get('@productlocator').find('.product').each(($element, $index, $list) => {
            const textVeg = $element.find('h4.product-name').text();
            console.log("value of text veg is :",textVeg) // this will print webbrowser console.
            if (textVeg.includes('Cashews')) {
                $element.find('button').trigger('click');
                cy.log('click on add to cart by Arrow Function');

                // above the statement you can't write like
                // $element.find('button').click(); // becoz it's deprecated instead of that you can write trigger

            }
        })

        cy.get('.products').find('.product').each(function ($element) {
            const Veg_text = $element.find('h4.product-name').text(); // converting webelement into text
            if (Veg_text.includes('Cashews')) {
                $element.find('button').trigger('click');
                cy.log("click add to cart by function")
            }

        })

        // cy.get('.cart-icon').click()
        // cy.get('.cart-items').find('.cart-item').each(($textVal, $index) => {
        //     const textValue = $textVal.find('.product-name').text()
        //     cy.log(textValue)
        //     // if (textValue === 'Cashews - 1 Kg')
        //     //     cy.log('Cashews - 1 Kg is present in cart')
        // })

        // can't get a text like this
        // const logo_text = cy.get('.brand.greenLogo').text()
        // cy.log(logo_text)

        // assertion for logo text
        cy.get('.brand').should("have.text", 'GREENKART')

        // using traditional function: resolve the promises
        cy.get('.brand').then(function(logo){
            cy.log(logo.text())
            cy.log(" normal function")
        })

        //using arrow function
        cy.get('.brand').then((logo_name =>{
            cy.log(logo_name.text())
            cy.log(" arrow function")
        }))
    })
})