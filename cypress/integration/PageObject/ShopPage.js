
export const SHOP_NAV_SELECTOR = 'Shop'
export const CARD_TEXT_SELECTOR = 'h4.card-title a'
export const CARD_FOOTER_SELECTOR = '.card-footer'

class ShopPage{
    
    getShopPage(){
        return cy.contains(SHOP_NAV_SELECTOR)
    }

    getCardText(){
        return cy.get(CARD_TEXT_SELECTOR)
    }

    getCardFooter(){
        return cy.get(CARD_FOOTER_SELECTOR)
    }

    VerifyingLink(){
        this.getShopPage().click()
        cy.url().should('include', 'shop')
        cy.log('verified the shop web page link')
    }

    AddItemIntoCart(product_name){
        this.getCardText().each(($element, index)=>{
            const card_text=$element.text()
            if (card_text.includes(product_name)){
                // if you got multiple element use eq() then perform operation on it.
                this.getCardFooter().find('button').eq(index).click();
            }
        })

    }

}

export default ShopPage;