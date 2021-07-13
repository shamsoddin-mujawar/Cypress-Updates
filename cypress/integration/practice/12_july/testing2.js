/// <reference types="cypress-iframe" />

// handling frames

describe('testing frames on rahulshetty.com',()=>{

    it('testing frames',()=>{
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('iframe#courses-iframe')  // passed the id of the iframe this for loading iframe
        cy.iframe().find('a[href*="mentorship"]').eq(0).click();  // for accessing element from iframe you have to use iframe()
        cy.iframe().find('h1.pricing-title').should('have.length',2)
    })
})