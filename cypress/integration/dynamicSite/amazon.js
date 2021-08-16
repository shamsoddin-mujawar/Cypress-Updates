describe('amazon.com', ()=>{
    beforeEach(() => {
        cy.visit('https://www.amazon.in/')
    })

    it('testing signin', ()=>{
        cy.get('#nav-link-accountList').trigger("hover").then(() => {
            cy.get('[data-nav-ref="nav_signin"]').click({force: true})
        })
    })

    it('language selection',()=>{
        cy.get('#icp-nav-flyout').trigger("hover").then(() =>{
            cy.get('')

        })
    })

    it('Test case 3', ()=>{
        cy.get('#nav-hamburger-menu').click()
        cy.get('b').should('have.text', 'Hello, Sign in')
        cy.get('ul').find("[href*='movers-and-shakers']").click()
        cy.url().should('include','movers-and-shakers')
        cy.get('#zg_banner_text_wrapper').should('include.text','Movers & Shakers')
    })

    it('test case 4',()=>{
        cy.get('#nav-hamburger-menu').click()
        cy.get('b').should('have.text', 'Hello, Sign in')
        cy.get('ul').find("[data-ref-tag='nav_em_1_1_1_11']").click()
        cy.contains('Amazon Prime Music').click({force: true})
        cy.url().should('include', '/music/prime')
    })

    it.only('add product to cart',()=>{
        cy.get('[href*="/mobile-phones"]').click()
        cy.get('[href*="elec_mega_1"]').trigger("hover").then(()=>{
            cy.get('[href*="elec_s23_1_2_1_6"]').click()
        })
        cy.get('.a-size-base-plus').each((element, index)=>{
           const product_txt = element.text()
           if(product_txt.includes('iPhone 12 (64GB) - Black')){
            cy.get('.a-size-base-plus').eq(index).click()
           }
           cy.get('#productTitle').should('have.text', 'New Apple iPhone 12 (64GB) - Black')
           cy.get('#add-to-cart-button').click()
           cy.get('#attach-sidesheet-checkout-button-announce').click()
           cy.get('h1').should('have.text', 'Sign-In')
        })
    })


})