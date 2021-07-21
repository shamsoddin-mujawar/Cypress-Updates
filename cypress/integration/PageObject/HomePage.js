
// selectors
export const PAGE_URL = 'https://www.rahulshettyacademy.com/angularpractice/'
export const INPUT_NAME_SELECTOR = 'input[name="name"]:nth-child(2)'
export const INPUT_EMAIL_SELECTOR = 'input[name="email"]'
export const INPUT_PASSWORD_SELECTOR = '#exampleInputPassword1'
export const GENDER_DROPDOWN_SELECTOR = '#exampleFormControlSelect1'
export const RADIO_BTN_SELECTOR = '#inlineRadio1'
export const CHECKBOX_SELECTOR = "#exampleCheck1"

class HomePage
{
    
    navigationToAngularPractice(){
        cy.visit(PAGE_URL)
    }

    getName(){
        return cy.get(INPUT_NAME_SELECTOR)
    }

    getEmail(){
        return cy.get(INPUT_EMAIL_SELECTOR)
    }

    getPassword(){
        return cy.get(INPUT_PASSWORD_SELECTOR)
    }

    getDropDown(){
        return cy.get(GENDER_DROPDOWN_SELECTOR)
    }

    getRadio(){
        return cy.get(RADIO_BTN_SELECTOR)
    }

    getCheckBox(){
        return cy.get(CHECKBOX_SELECTOR)
    }

    // setter method

    fillName(name, email, pass){
        this.getName().type(name)
        this.getEmail().type(email)
        this.getPassword().type(pass)
    }

    GenderDropdown(value){
        this.getDropDown().select(value)
    }

    RadioValues(){
        this.getRadio().check().should('have.value', 'option1')
    }

    CheckBoxVerification(){
        this.getCheckBoxt().check().should('be.checked')
    }

}




// export keyword help to available 'HomePage' to all files.
export default HomePage;