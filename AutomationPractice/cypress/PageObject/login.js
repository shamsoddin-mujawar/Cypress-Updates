
export const EMAIL_SELECTOR = '#email'
export const PASSWORD_SELECTOR = '#passwd'
export const SIGNIN_SELECTOR = 'button[name="SubmitLogin"]'
export const ACCOUNT_NAME_SELECTOR = 'a.account span'
export const LOGOUT_ACCOUNT_SELECTOR = 'a.logout'
export const AUTHENTICATION_SELECTOR = '.navigation_page'



class login{

    getEmail(){
        return cy.get(EMAIL_SELECTOR)
    }

    getPassword(){
        return cy.get(PASSWORD_SELECTOR)
    }

    getSignInBtn(){
        return cy.get(SIGNIN_SELECTOR)
    }

    getAccountName(){
        return cy.get(ACCOUNT_NAME_SELECTOR)
    }

    getLogoutAccount(){
        return cy.get(LOGOUT_ACCOUNT_SELECTOR)
    }

    getAuthentication(){
        return cy.get(AUTHENTICATION_SELECTOR)
    }

    getAccountDetails(fName, lName){
        this.getAccountName().then((accountName)=>{
           const accHolder = accountName.text()
           accountName = fName+" "+lName
           this.verifyAccount(accHolder,accountName)
        })
    }

    verifyAccount(accHolder, accountName){
        expect(accHolder).to.equal(accountName)
        cy.log(`verify ${accHolder} account is created/login successfully`)
    }

    clickOnSignOut(){
        this.getLogoutAccount().click()
    }

    verifyLogOut(){
        cy.url().should('include', 'back=my-account')
        cy.log('Logout Successfully')
    }

    signinAccount(email, pass){
        this.getEmail().type(email)
        this.getPassword().type(pass)
        this.getSignInBtn().click();
    }

    verifySigninAccount(f_name, l_name){
        cy.url().should('include', '=my-account')
        this.getAccountDetails(f_name, l_name)
    }

}

export default login;