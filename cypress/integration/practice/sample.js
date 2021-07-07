// basic of cypress
// -------------- First test case  ----------------

// describe('My first Test', () =>{
//     it('does not do much!', ()=>{
//         expect(true).to.equal(true)
//     })

// })

// -------------- clicking on element -----------

// test click on element
// describe('My First Test', () =>{
//     it('do somethign', ()=>{
//         cy.visit('https://example.cypress.io')
//         cy.contains('type').click()
//     })
// })

// describe('My First Test', () => {
//     it('Gets, types and asserts', () => {
//       cy.visit('https://example.cypress.io')
  
//       cy.contains('type').click()
  
//       // Should be on a new URL which includes '/commands/actions'
//       cy.url().should('include', '/commands/actions')
  
//       // Get an input, type into it and verify that the value has been updated
//       cy.get('.action-email')
//         .type('samir@email.com')
//         .should('have.value', 'samir@email.com')
//     })
//   })



// it('visits base url', () => {
//     cy.visit('/')
//     cy.contains('h1', 'Kitchen Sinke')
//     cy.screenshot()
// })
  
//   it('visits local file', { baseUrl: null }, () => {
//     cy.visit('index.html')
//     cy.contains('local file')
//     expect(true).to.eq(true)
//   })


// --------------- demo testing 

/*
1.Assert about the content on the page.
*/

describe("testing app", () =>{
    it("clicking 'type' navigate to an url",() =>{
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')
    })
})