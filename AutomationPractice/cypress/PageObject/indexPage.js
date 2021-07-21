
export const SEARCH_BOX_SELECTOR = '#search_query_top'
export const SEARCH_BTN_SELECTOR = 'button[name="submit_search"]'
export const SEARCH_RESULT_TEXT_SELECTOR = 'h1 span:nth-child(1)'
export const FOUND_RESULT_SELECTOR = 'span.heading-counter'
export const PRODUCT_COUNT_SELECTOR = '.top-pagination-content > .product-count'
export const LIST_VIEW_SELECTOR = 'li#list'
export const ADD_TO_CART_BTN_SELECTOR = 'Add to cart'
export const SUCCESS_MSG_SELECTOR = '.layer_cart_product  h2'
export const PROCEED_TO_CHECKOUT_BTN_SELECTOR = 'Proceed to checkout'
export const CART_COUNT_SELECTOR = '.ajax_cart_quantity.unvisible'
export const QUANTITY_COUNT_SELECTOR = '.cart_quantity_input'
export const CLOSE_WINDOW = 'span[title="Close window"]'
export const CHECKOUT_BTN_SELECTOR = 'Check out'
export const VIEW_CART_SELECTOR = 'a[title="View my shopping cart"]'


class indexPage {

    getInputSearchBox() {
        return cy.get(SEARCH_BOX_SELECTOR)
    }

    getSearchBtn() {
        return cy.get(SEARCH_BTN_SELECTOR)
    }

    getSearchResult() {
        return cy.get(SEARCH_RESULT_TEXT_SELECTOR)
    }

    getFoundResult() {
        return cy.get(FOUND_RESULT_SELECTOR)
    }

    getProductCount() {
        return cy.get(PRODUCT_COUNT_SELECTOR)
    }

    getListView() {
        return cy.get(LIST_VIEW_SELECTOR)
    }

    getAddToCartBtn() {
        return cy.contains(ADD_TO_CART_BTN_SELECTOR)
    }

    getSuccessMsg() {
        return cy.get(SUCCESS_MSG_SELECTOR)
    }

    getProceedBtn() {
        return cy.contains(PROCEED_TO_CHECKOUT_BTN_SELECTOR)
    }

    getCartCount() {
        return cy.get(CART_COUNT_SELECTOR)
    }

    getQuantityCount() {
        return cy.get(QUANTITY_COUNT_SELECTOR)
    }

    getCloseWindow(){
        return cy.get(CLOSE_WINDOW)
    }

    getCheckoutBtn(){
        return cy.contains(CHECKOUT_BTN_SELECTOR)
    }

    getViewCart(){
        return cy.get(VIEW_CART_SELECTOR)
    }


    verifySearchProducts(expected_name) {
        this.getInputSearchBox().type(expected_name)
        this.getSearchBtn().click();
        this.getSearchResult().then(function (search_result) {
            const result = search_result.text()
            const acutal_name = result.replace('"', "")
            expect(expected_name).to.equal(acutal_name.trim().replace('"', ''))
        })
    }

    verifyProductsCount(expected_result) {
        this.getProductCount().then((count_result) => {
            const result1 = count_result.text()
            var acutal_result = result1.trim().split(" ")[5]
            expect(expected_result).to.equal(acutal_result)
        })
    }

    getProductQuantity() {
        this.getFoundResult().then((found_result) => {
            let result = found_result.text()
            var expected_result = result.trim().split(" ")[0]
            this.verifyProductsCount(expected_result)
        })
    }

    clickOnListView() {
        this.getListView().click()
    }

    verifyListView() {
        this.getListView().should('have.class', 'selected')
    }

    clickOnAddToCart() {
        this.getAddToCartBtn().click()
        this.getSuccessMsg().then((element_txt) => {
            const message = element_txt.text()
            this.verifyAddToCart(message)
        })
    }

    verifyAddToCart(message) {
        expect(message.includes('Product successfully added')).to.be.true
    }

    clickOnCloseWindow(){
        this.getCloseWindow().click()
    }

    clickOnViewCart(){
        this.getViewCart().click()
    }

    clickOnCheckOutBtn(){
        this.getCheckoutBtn().click({force: true})
    }

    clickOnProceedToCheckoutBtn() {
        this.getProceedBtn().click()
    }

    verifyProceedTocheckout() {
        cy.url().should('include', 'order')
    }

    verifyCartAndQuantityCountOfProducts() {
        this.getCartCount().then((cartValue) => {
            var cartTotal = cartValue.text()
            this.clickOnViewCart()
            this.clickOnCheckOutBtn()
            this.getQuantityCount().should('have.value', cartTotal)
        })
    }
}

export default indexPage;