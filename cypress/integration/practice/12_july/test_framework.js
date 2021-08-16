// creating testing framework: fixture , this keyword.
// veryfying attribute values.

describe('creating testing framework', function () {

    beforeEach(() => {
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
    })

    // "this" is used to accessible for entire file or anywhere in the file.
    // 'this' does not have own binding should not used with arrow function. ()=>{}

    before(function() {
        // to resolve  promises fixture() used then() function to resolve itself.
        // store data in fixture/example.json file accessing used inside this file.

         cy.fixture('example').then(function(data) {
<<<<<<< HEAD
            this.getData = data     // initialize lacal 'data' variable with global variable 'getData'.so you can access any where in this file.
=======
            this.getData = data     // initialize lacal 'data' variable with global variable 'getData'.so you can access any where in this file
>>>>>>> f784bd590d808e3acd08ed53b2db44bb0695ae60
         })
    })

    it('hooks',  function() {

        cy.get('input[name="name"]:nth-child(2)').type(this.getData.name)  // to identifying that variable used this.getData.name 'name' is an value strore in examle.json file

        cy.get('input[name="email"]').type(this.getData.email)

        cy.get('#exampleInputPassword1').type(this.getData.pass)

        cy.get('#exampleCheck1').check().should('be.checked')

        cy.get('#exampleFormControlSelect1').select(this.getData.dropdown)

        cy.get('#inlineRadio1').check().should('have.value', 'option1')
    })

    // this won't work with arrow function.
    it('validating above things', () => {

        // value inserting first text box
        cy.get('input[name="name"]:nth-child(2)').type(this.getData.name)

        cy.get('input[name="name"]:nth-child(1)').should('have.value', this.getData.name)

        // validating attribute of input tag.
        // <input class="form-control ng-touched ng-dirty ng-invalid" minlength="2" name="name" required="" type="text" style="">
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')

        // <input class="form-control ng-touched ng-dirty ng-invalid" minlength="2" name="name" required="" type="text" style="">
        // verifying attribute 'type' value is 'text'
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'type', 'text')

        // validating radio button is disabled or not
        cy.get('#inlineRadio3').should('be.disabled')

    })

    it('testing/ add to cart specific element', function () {
        
        cy.contains('Shop').click()
        cy.log('click on shop nav bar')
        cy.url().should('include', 'shop')

        // wrote generic method to click specific element.
        cy.SelectProduct('Samsung Note 8')
    })

    it.only('adding multiple element into card', function () {
        cy.contains('Shop').click()
        cy.log('click on shop nav bar')
        cy.url().should('include', 'shop')

        //1. in example.json file created 'ProductName" in array store multiple values of product.
        // forEach is an function used to iterating array element.

        this.getData.ProductName.forEach(function(element){
            cy.SelectProduct(element)
            cy.log("adding multiple element into the cart")
        })

    })

})
