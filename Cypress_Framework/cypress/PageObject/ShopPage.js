import { customerData } from '../../cypress/fixtures/common_fixture/home'

export const SHOP_NAV_SELECTOR = 'Shop'
export const CARD_TEXT_SELECTOR = 'h4.card-title a'
export const CARD_FOOTER_SELECTOR = '.card-footer'
export const CHECKOUT_BTN_1_SELECTOR = 'a.nav-link.btn'
export const PRODUCT_PRICE_SELECTOR = 'tr td:nth-child(4) strong'
export const TOTAL_PRODUCT_PRICE_SELECTOR = 'h3 strong'
export const CHECKOUT_BTN_2_SELECTOR = '.btn.btn-success'
export const PRODUCT_QUANTITY_SELECTOR = 'input[type="number"]'
export const TOTAL_QUANTITY_SELECTOR = '.nav-link.btn-primary'
export const DELIVERY_LOCATION_SELECTOR = '#country'
export const CHECKBOX_SELECTOR = 'input#checkbox2'
export const PURCHASE_BTN_SELECTOR = 'input[type="submit"]'
export const SUCCESS_MSG_SELECTOR = '.alert'

class ShopPage {

    getShopPage() {
        return cy.contains(SHOP_NAV_SELECTOR)
    }

    getCardText() {
        return cy.get(CARD_TEXT_SELECTOR)
    }

    getCardFooter() {
        return cy.get(CARD_FOOTER_SELECTOR)
    }

    getCheckoutBtn1() {
        return cy.get(CHECKOUT_BTN_1_SELECTOR)
    }

    getProductPrice() {
        return cy.get(PRODUCT_PRICE_SELECTOR)
    }

    getProductTotal() {
        return cy.get(TOTAL_PRODUCT_PRICE_SELECTOR)
    }

    getCheckOutBtn2() {
        return cy.get(CHECKOUT_BTN_2_SELECTOR)
    }

    getProductQuantity() {
        return cy.get(PRODUCT_QUANTITY_SELECTOR)
    }

    getTotalQuantity() {
        return cy.get(TOTAL_QUANTITY_SELECTOR)
    }

    getDeliveryLocation() {
        return cy.get(DELIVERY_LOCATION_SELECTOR)
    }

    getCheckbox() {
        return cy.get(CHECKBOX_SELECTOR)
    }

    getPurchaseBtn() {
        return cy.get(PURCHASE_BTN_SELECTOR)
    }

    getSuccessMsg() {
        return cy.get(SUCCESS_MSG_SELECTOR)
    }

    verifyingShopPageUrl() {
        this.getShopPage().click()
        cy.url().should('include', 'shop')
        cy.log('verified the shop web page link')
    }

    // 1st way : method undefine means it's not accessible.

    // getProductName(){
    //     customerData.productname.forEach(function(product_name){
    //         this.addItemIntoCart(product_name)
    //     })
    // }

    // getProductName(){
    //     customerData.productname.forEach((product_name) =>{
    //         this.addItemIntoCart(product_name)
    //     })
    // }

    // addItemIntoCart(product_name){
    //     this.getCardText().each(($element, index)=>{
    //         const card_text=$element.text()
    //         if (card_text.includes(product_name)){
    //             this.getCardFooter().find('button').eq(index).click();
    //         }
    //     })
    // }


    // 2nd Way: for such cases use arrow function. not function().
    addToCart() {
        customerData.productname.forEach(product_name => {
            this.getCardText().each(($element, index) => {
                const card_text = $element.text()
                if (card_text.includes(product_name)) {
                    this.getCardFooter().find('button').eq(index).click();
                }
            })
        })
    }

    clickOnCheckoutBtn1() {
        this.getCheckoutBtn1().click();
    }

    verifyCalculationOfProduct() {
        var sum = 0
        this.getProductPrice().each(function (product) {
            const product_price = product.text()
            var price = product_price.split(' ')[1]
            sum = Number(sum) + Number(price)
        })
        this.getProductTotal().then(function (product_total) {
            const total = product_total.text()
            var total_price = total.split(' ')[1]
            expect(Number(total_price)).to.equal(Number(sum))
            cy.log('verifying product total')
        })
    }

    getTotalProductQuantity() {
        this.getTotalQuantity().then(quant => {
            const quantityTxt = quant.text();
            const quantity = quantityTxt.trim();
            var totalQuantity = quantity.split(' ')[2]
            this.clickOnCheckoutBtn1()
            this.verifyProductQuantity(totalQuantity)
        })
    }

    verifyProductQuantity(totalQuantity) {
        this.getProductQuantity().each((quantity) => {
            const quantity_text = quantity.text()
            console.log(quantity_text)
            var sumOfQuantity = 0;
            var sumOfQuantity = Number(sumOfQuantity) + Number(quantity_text)
            cy.log(sumOfQuantity)
            expect(Number(sumOfQuantity)).to.equal(Number(totalQuantity))
        })
    }

    clickOnCheckoutBtn2() {
        this.getCheckOutBtn2().click();
    }

    selectCountry() {
        this.getDeliveryLocation().type('India')
        cy.get('.suggestions a').click()
    }

    clickOnCheckBox() {
        this.getCheckbox().check({ force: true })
    }

    verifyCheckBox() {
        this.getCheckbox().should('be.checked')
    }

    clickOnPurchaseBtn() {
        this.getPurchaseBtn().click()
    }

    verifyOrder() {
        this.getSuccessMsg().then(message => {
            const successTxt = message.text();
            // const successMessage = successTxt.trim()
            // this.getSuccessMsg().should('include', successTxt)
            expect(successTxt.includes('Success')).to.be.true
        })
    }
}


export default ShopPage;