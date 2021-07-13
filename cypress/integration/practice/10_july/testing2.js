describe('testing 2',()=>{
    it('testing alert box',()=>{
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')

        // cypress automatically click the pop-up window or alerts.

        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();

        // validating alert boxex if it click or not by 'text value'

        cy.on('window:alert', (str)=>{
            // mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })

    it('switching tab', ()=>{

        // removeAttr :jquery function used to remove the attribute.
        cy.get('#opentab').invoke('removeAttr','target').click();

        // include match with an substring
        // url() is a command to get a url of current window.
        // 'include' is an function that use to get substring.
        cy.url().should('include', 'rahulshettyacademy')
        cy.log('verifying url on new open window')

        // go method help to navigate forward or backward browser window.
        // this work if you are i  same window.if you are switch to new window it won't work.
        // cy.go('forward')
        
        cy.go('back')
        cy.log('back to previous window')
    })
})