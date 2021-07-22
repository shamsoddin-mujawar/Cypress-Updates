import data from '../fixtures/common_fixture/home'
import fakeData from '../fixtures/common_fixture/randomData'

export const SIGN_IN_SELECTOR = 'a.login'
export const REGISTER_EMAIL_SELECTOR = '#email_create'
export const CREATE_ACCOUNT_SELECTOR = '#SubmitCreate'
export const RADIO_BTN_SELECTOR = 'input#id_gender1'
export const FIRST_NAME_SELECTOR = 'input#customer_firstname'
export const LAST_NAME_SELECTOR = 'input#customer_lastname'
export const EMAIL_SELECTOR = 'input#email'
export const PASSWORD_SELECTOR = 'input#passwd'
export const DAYS_SELECTOR = '#uniform-days select#days'
export const MONTH_SELECTOR = '#uniform-months select#months'
export const YEAR_SELECTOR = '#uniform-years select#years'
export const NEWS_LETTER_CHECKBOX_SELECTOR = 'input#newsletter'

// address selector 
export const NAME_SELECTOR = '#firstname'
export const LASTNAME_SELECTOR = '#lastname'
export const COMPANY_NAME_SELECTOR = '#company'
export const ADDRESS_SELECTOR = '#address1'
export const CITY_SELECTOR = '#city'
export const STATE_SELECTOR = 'select#id_state'
export const POSTCODE_SELECTOR = '#postcode'
export const ADD_INFO_SELECTOR = '#other'
export const HOME_PHONE_SELECTOR = '#phone'
export const PHONE_MOBILE_SELECTOR = '#phone_mobile'
export const ADDRESS_2_SELECTOR = '#alias'
export const REGISTER_BTN_SELECTOR = '#submitAccount'

var randomNumber = Math.floor((Math.random() * 10000000000) + 10);


class registration {

    getSignIn() {
        return cy.get(SIGN_IN_SELECTOR)
    }

    getRegisterEmailId() {
        return cy.get(REGISTER_EMAIL_SELECTOR)
    }

    getCreateAccount() {
        return cy.get(CREATE_ACCOUNT_SELECTOR)
    }

    getRadioBtn() {
        return cy.get(RADIO_BTN_SELECTOR)
    }

    getFirstName() {
        return cy.get(FIRST_NAME_SELECTOR)
    }

    getLastName() {
        return cy.get(LAST_NAME_SELECTOR)
    }

    getEmail() {
        return cy.get(EMAIL_SELECTOR)
    }

    getPassword() {
        return cy.get(PASSWORD_SELECTOR)
    }

    getDays() {
        return cy.get(DAYS_SELECTOR)
    }

    getMonth() {
        return cy.get(MONTH_SELECTOR)
    }

    getYear() {
        return cy.get(YEAR_SELECTOR)
    }

    getCheckbox() {
        return cy.get(NEWS_LETTER_CHECKBOX_SELECTOR)
    }

    getName() {
        return cy.get(NAME_SELECTOR)
    }

    getLastN() {
        return cy.get(LASTNAME_SELECTOR)
    }

    getCompany() {
        return cy.get(COMPANY_NAME_SELECTOR)
    }

    getAddress() {
        return cy.get(ADDRESS_SELECTOR)
    }

    getCity() {
        return cy.get(CITY_SELECTOR)
    }

    getState() {
        return cy.get(STATE_SELECTOR)
    }

    getCheckbox() {
        return cy.get(NEWS_LETTER_CHECKBOX_SELECTOR)
    }

    getPostcode() {
        return cy.get(POSTCODE_SELECTOR)
    }

    getInformationText() {
        return cy.get(ADD_INFO_SELECTOR)
    }

    getHomePhone() {
        return cy.get(HOME_PHONE_SELECTOR)
    }

    getMobile() {
        return cy.get(PHONE_MOBILE_SELECTOR)
    }

    getAddress_2() {
        return cy.get(ADDRESS_2_SELECTOR)
    }

    getRegisterBtn() {
        return cy.get(REGISTER_BTN_SELECTOR)
    }

    createAccount(email) {
        this.getSignIn().click()
        this.getRegisterEmailId().type(email)
        this.getCreateAccount().click()
    }

    checkRadioButton() {
        this.getRadioBtn().check()
    }

    enterUserDetailsForm(firstName, lastName) {
        this.getFirstName().type(firstName)
        this.getLastName().type(lastName)
    }

    enterPassword(pass) {
        this.getPassword().type(pass)
    }

    enterBirthDate() {
        this.getDays().select('21')
        this.getMonth().select('July')
        this.getYear().select('1998')
    }

    clickCheckBox() {
        this.getCheckbox().check()
    }

    EnterAddressInfoForm() {
        this.getName().type(fakeData.firstName)
        this.getLastN().type(fakeData.lastName)
        this.getCompany().type(fakeData.company)
        this.getAddress().type(fakeData.address)
        this.getCity().type(fakeData.city)
        this.getState().select(data.state)
        this.getPostcode().type('60419')
        this.getInformationText().type('Hello world')
        this.getHomePhone().type(randomNumber)
        this.getMobile().type(randomNumber)
        this.getAddress_2().clear().type(fakeData.address)
        this.getRegisterBtn().click()
    }

    verifyCreateAccountNAvigationPage() {
        cy.url().should('include', 'account-creation')
    }

    verifyRadioButtonIsCheck() {
        this.getRadioBtn().should('be.checked').and('have.value', '1')
    }

    verifyEmailAddress(email) {
        this.getEmail().should('have.value', email)
    }

    verifyBirthDate() {
        this.getDays().should('have.value', '21')
        this.getMonth().should('have.value', '7')
        this.getYear().should('have.value', '1998')
    }

    verifyCheckBox() {
        this.getCheckbox().should('be.checked').and('have.value', '1')
    }

    // days selection
    // verifyDates() {
    //     var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    //     var arr2 = []
    //     cy.get('#uniform-days').focus().click()
    //     cy.get('select[id="days"]>option').each(function(values){
    //         arr2 = arr2 + values
    //         // cy.log(arr2)
    //     })
    //     if (arr1 === arr2) {
    //         cy.log('equal')
    //     }
    //     else {
    //         cy.log('not equal')
    //     }
    // }
}


export default registration;