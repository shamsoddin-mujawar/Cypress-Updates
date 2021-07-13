describe('Testing on rahulshetty.com', () =>{

    it('testing checkbox', ()=>{
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')

        // clicking and verifying checkbox or validation/assertion
        // you can compare or assert by value, id ,css,text,String more oprions.
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        // cy.get('#checkBoxOption1').check().should('be.checked').and('have.id', 'checkBoxOption1')

        // unclicking checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // clicking multiple checkboxex: use common propertis of all checkbox
        // as i mention in cy.get("input[type='checkbox]"). in check i have put the attributre values.
        cy.get("input[type='checkbox']").check(['option2', 'checkBoxOption1']).should('be.checked')

    })

    it('testing dropdown', () =>{
        // handling static dropdown
        // select value based on attribute value.
        cy.get('select').select('option2').should('have.value', 'option2')

        // select dropdown based on text of dropdown values
        cy.get('select').select('Option1')


    })

    it('testing dynamic dropdown', ()=>{
        cy.get('#autocomplete').type('ind')
        cy.get('li.ui-menu-item div').each(($element) =>{
            if ($element.text() === 'India'){
                $element.trigger('click')
            }
        })
        // validation to check if it india is selected or not
        // adding assertion putted value in should command must be the same
        cy.get('#autocomplete').should('have.value', 'India')
    })

    it('testing visibility of an element', ()=>{
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })

    it('testing radio button', ()=>{
        // clicking single radio button
        cy.get("input[value='radio1']").check().should('be.checked').and('have.value','radio1')
        
        // clicking multiple radio button
        cy.get('.radioButton').check(['radio2','radio3']).should('be.checked')
    })
})
