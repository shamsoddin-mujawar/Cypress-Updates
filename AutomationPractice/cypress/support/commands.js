// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//

// this is the custome command or comman method.use to create an generic function.
// 'SelectProduct' this is the command name.
Cypress.Commands.add('SelectProduct', (product_name) => { 
    cy.get('h4.card-title a').each(($element, index)=>{
        const card_text=$element.text()
        if (card_text.includes(product_name)){
            // if you got multiple element use eq() then perform operation on it.
            cy.get('.card-footer').find('button').eq(index).click();
        }
    })
 })


 Cypress.Commands.add('login', (email, password) => { 
     
 })


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
