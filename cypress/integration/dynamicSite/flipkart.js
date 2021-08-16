describe('Filpkart.com', () => {
    before(function () {
        cy.visit('https://www.flipkart.com/')
    })
    it('login page -demo testing', () => {
        const gmail = 'samir.21@gmail.com'
        const pass = 'password123'

        cy.get('[href*="/login"]').click()
        cy.get('._36KMOx>span').should('have.text', 'Login')
        // IiD88i>input[type='text']
        cy.get(".IiD88i>[type='text']").type(gmail).should('have.value', gmail)
        cy.get("[type='password']").type(pass).should('have.value', pass)
        //._1D1L_j>button
        // ._3AWRsL
        cy.get("._1D1L_j>button").click()
        cy.get('._36KMOx>span').should('have.text', `Looks like you're new here!`)
        cy.get('._2doB4z').click()

        // inputtext _55r1 _6luy
    })

    it.only('automating search function on fliapkart', () => {
        const searchItem = "apple 12 pro max"
        const phone = '1425367895'

        cy.get("[name='q']").type(searchItem)
        cy.get('.L0Z3Pu').click()
        cy.get("._10Ermr>span").should('have.text', searchItem)
        cy.get('[href^="/apple-iphone-12-pro-max-pacific-blue-128"]').invoke('removeAttr', 'target').click()
        // add to cart
        cy.get(' ._3v1-ww').click()
        // place order button
        cy.get('span').contains('Place Order').click()
        cy.get("[type='text']").type(phone).should('have.value', phone)
        cy.get("[type='submit']").click()
    })

    it('Flipkart :dynamic dropdown value selection', () => {
        const searchItem = "apple 12 pro max gold"

        cy.get("[name='q']").type(searchItem)
        cy.get('.lrtEPN._17d0yO>span').each((element) => {
            const itemTxt = element.text()
            if (itemTxt === 'apple 12 pro max gold') {
                element.trigger('click')
            }
            cy.get("._10Ermr>span").should('have.text', searchItem)
        })
    })

})