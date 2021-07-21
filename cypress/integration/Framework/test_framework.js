// PageObjectModel

import HomePage from '../PageObject/HomePage'
import ShopPage from '../PageObject/ShopPage'

// import * as data  from '../../fixtures/common_fixture/home.js'
// import homedata  from '../../fixtures/common_fixture/home.js'

const homePage = new HomePage();
const shopPage = new ShopPage();

describe('Cypress Testing Framework ', function () {
    beforeEach(() => {
        homePage.navigationToAngularPractice()
    })

    before(function () {
        cy.fixture('common_fixture/home.json').then(function(data){
            this.data = data;
        })

    })

    it('First Test Case',  function() {
        // homePage.fillName(data.NAME, data.EMAIL , data.PASS)
        homePage.fillName(this.data.name, this.data.email, this.data.pass)
        homePage.GenderDropdown(this.data.dropdown)
        homePage.RadioValues()

        // switchig to the next page 'shop'
        shopPage.VerifyingLink()
        this.data.ProductName.forEach(function (product_name){
            shopPage.AddItemIntoCart(product_name)
        })
        
    })
})
