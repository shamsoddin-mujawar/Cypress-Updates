
import HomePage from '../../PageObject/HomePage'
import ShopPage from '../../PageObject/ShopPage'
import {customerData} from '../../fixtures/common_fixture/home'

const homePage = new HomePage();
const shopPage = new ShopPage();

describe('Cypress Testing Framework ', function () {
    before(() => {
        cy.visit('/')
    })

    it('Home Page - Customer Info Test Case',  function() {
        homePage.enterCustomerInfoForm(customerData.name, customerData.email, customerData.pass)
        homePage.clickCheckBox()
        homePage.verifyCheckBox()
        homePage.clickDropdownAndRadioBtn(customerData.dropdown)
        homePage.verifyRadioBtn() 
        homePage.selectDate()
        homePage.clickOnSubmitBtn()
        homePage.verifyFormSubmition()
    })

    it.only('Shop page - Add To Cart And Checkout Test Case', function () {
        shopPage.verifyingShopPageUrl()
        shopPage.addToCart()
        shopPage.getTotalProductQuantity()
        shopPage.verifyCalculationOfProduct()
        shopPage.clickOnCheckoutBtn2()
        shopPage.selectCountry()
        shopPage.clickOnCheckBox()
        shopPage.verifyCheckBox()
        shopPage.clickOnPurchaseBtn()
        shopPage.verifyOrder()
    })
})
