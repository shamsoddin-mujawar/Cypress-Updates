const date = require("moment");

export const INPUT_NAME_SELECTOR = 'input[name="name"]:nth-child(2)'
export const INPUT_EMAIL_SELECTOR = 'input[name="email"]'
export const INPUT_PASSWORD_SELECTOR = '#exampleInputPassword1'
export const GENDER_DROPDOWN_SELECTOR = '#exampleFormControlSelect1'
export const RADIO_BTN_SELECTOR = '#inlineRadio1'
export const CHECKBOX_SELECTOR = "#exampleCheck1"
export const DATE_SELECTOR = 'input[name="bday"]'
export const SUBMIT_BTN_SELECTOR = 'input[type="submit"]'
export const SUCCESS_MESSAGE_SELECTOR = 'div.alert'

class HomePage
{
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

    getDate(){
        return cy.get(DATE_SELECTOR)
    }

    getSubmitBtn(){
        return cy.get(SUBMIT_BTN_SELECTOR)
    }

    getSuccessMsg(){
        return cy.get(SUCCESS_MESSAGE_SELECTOR)
    }



    enterCustomerInfoForm(name, email, pass){
        this.getName().type(name)
        this.getEmail().type(email)
        this.getPassword().type(pass)
    }

    clickDropdownAndRadioBtn(value){
        this.getDropDown().select(value)
        this.getRadio().check()
    }

    verifyRadioBtn(){
        this.getRadio().should('have.value', 'option1')
    }

    clickCheckBox(){
        this.getCheckBox().check()
    }

    verifyCheckBox(){
        this.getCheckBox().should('be.checked')
    }

    selectDate(){
        const currentDate = date().format("YYYY-MM-DD")
        this.getDate().type(currentDate)
    }

    clickOnSubmitBtn(){
        this.getSubmitBtn().click()
    }

    verifyFormSubmition(){
        this.getSuccessMsg().then((success) => {
            const success_msg  = success.text();
            expect(success_msg.includes('Success!')).to.be.true
        })
    }
}


export default HomePage;