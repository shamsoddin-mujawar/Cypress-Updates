/*
Handling alert 
switching or handling child tab
Navigation window like backward and forward.
ScrollToView() for specific web element.

*/ 


describe('testing 2',()=>{
    beforeEach(() => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')

        //Control the size and orientation of the screen for your application.
        // can set on package.json
        // cy.viewport(1280, 720)

    })

    it('testing alert box',()=>{
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
        // cypress does not have concept of switching to child tab and we can't work on it.

        // removeAttr :jquery function used to remove the attribute.
        cy.get('#opentab').invoke('removeAttr','target').click();

        // include match with an substring
        // url() is a command to get a url of current window.
        // 'include' is an function that use to get substring.
        cy.url().should('include', 'rahulshettyacademy')
        cy.log('verifying url on new open window')

        // go method help to navigate forward or backward browser window.
        // this work if you are in same window.if you are switch to new window it won't work.
        // cy.go('forward')
        
        cy.go('back')
        cy.log('back to previous window')
    })


    it('Navigation window and scroll to specific web element:', ()=>{
        // clicking on home button
        cy.get('.btn-primary')
        .contains('Home')
        .click()

        // verifying url 
        cy.url()
        .should('include','/index')

        // navigate to previous window
        cy.go('back')
        cy.url()

        // verifyig previous window
        .should('include','AutomationPractice/')
        cy.go('forward')

        // we can scroll to specific element. using scrollIntoView()
        // .scrollIntoView() yields the same subject it was given from the 'previous command'.
        cy.log("ScrollToView() apecific element")
        cy.get('.view-all-courses-btn')
        .scrollIntoView({ duration: 2000 })
        .should('be.visible').click()

        
        // verifying next window by url.
        cy.url()
        .should('include', '/courses')
    })


    it.only('Scolling', ()=>{
        
        // get the title of the current page and verified it.
        cy.title().should('eq', 'Practice Page')

        cy.get('.btn-primary')
        .contains('Home')
        .click()

        cy.url()
        .should('include','/index')

        //ensureScrollable: Ensure element is scrollable. Error if element cannot scroll.
        // ScrollTo() : Scroll to a specific position. u have to mention specific position, window pixil like hight and width.

        cy.get('.view-all-courses-btn')
        .scrollTo('bottom',{ ensureScrollable: false })
        .should('have.css', 'font-family')
        
        cy.get('.view-all-courses-btn').click()

        cy.url()
        .should('include', '/courses')

        cy.reload() // reload the page 
         
    })
})