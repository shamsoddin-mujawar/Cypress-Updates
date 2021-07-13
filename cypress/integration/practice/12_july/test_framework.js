// creating testing framework: fixture , this keyword.
// veryfying attribute values.

describe('creating testing framework', function () {

    beforeEach(() => {
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
    })

    // "this" is used to accessible for entire file or anywhere in the file.
    // 'this' does not have own binding should not used with arrow function. ()=>{}

    before(function () {
        // to resolve  promises fixture() used then() function to resolve itself.
        // store data in fixture/example.json file accessing used inside this file.

         cy.fixture('example').then(function (data) {
            this.getData = data     // initialize lacal 'data' variable with  variable 'getData'.so you can access any where in this file.
        })
    })

    it.only('hooks',  ()=> {

        cy.get('input[name="name"]:nth-child(2)').type(this.getData.name)  // to identifying that variable used this.getData.name 'name' is an value strore in examle.json file

        cy.get('input[name="email"]').type(this.getData.email)

        cy.get('#exampleInputPassword1').type(this.getData.pass)

        cy.get('#exampleCheck1').check().should('be.checked')

        cy.get('#exampleFormControlSelect1').select(this.getData.dropdown)

        cy.get('#inlineRadio1').check().should('have.value', 'option1')
    })

    it('validating above things', function () {

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

    it('testing other page', function () {
        cy.contains('Shop').click()
        cy.log('click on shop nav bar')
        cy.url().should('include', 'shop')
        cy.get('h4.card-title a').each(($element, $index)=>{
                const card_text=$element.text()
                if (card_text.includes('iphone X')){

                    // cy.contains('iphone X').click();

                    // if you got multiple element use eq() then perform operation on it.
                    cy.get('.card-footer').find('button').eq($index).click();
                }
        })
    })

})
