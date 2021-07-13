
/*
- getting web table specific column value.
- clicking on hidden element. e.g mousehover functionality
*/ 

describe('Handling web tables', () => {

    beforeEach(() => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
    })

    it('getting values from table', () => {
        

        // each method used to iterate the values 
        cy.get('tr td:nth-child(2)').each(function ($element, $index) {
            const table_text = $element.text()                                  // here directly using text(). becoz cy.get() promises resolved by each() method.
            if (table_text.includes('Python')) {
                cy.get('tr td:nth-child(2)').eq($index).next().then(function ($price) {                     // you can't get text directly here. becoz text() is not cypress method so you have resolved it first.so that resolved by manually used then() method.
                    const price_text = $price.text()
                    expect(price_text).to.equal('25')
                })
            }
        })
    })

    it.only('testing mouse over functionality', () =>{
        // 1st way to click the hidden element
        // invoke function help to use jquery function.
        cy.get('div.mouse-hover-content').invoke('show')                        // "show" is an jquery method that used to get hidden element of mention parent selector.
        cy.contains('Top').click()  // click by text
        cy.url().should('include', 'top')                                  // include is an method like substring to verify in url bar 'top' value is present or not.


        // 2nd way to click element
        // cy.contains('Top').click({force:true}) // get the hidden element selector or text. you can click by using click method as well.
        //                                         //  {force:true} it forcefully click the hidden element as well.
        // cy.url().should('include', 'top')

    })
})