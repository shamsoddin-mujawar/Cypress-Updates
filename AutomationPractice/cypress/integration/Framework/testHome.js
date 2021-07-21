import indexPage from '../../PageObject/indexPage'
import registration from '../../PageObject/registartion'
import login from '../../PageObject/login'
import data from '../../fixtures/common_fixture/home'
import fakeData from '../../fixtures/common_fixture/randomData'

const index = new indexPage();
const register = new registration();
const logIn = new login();

describe('AutomationPractice.com',function(){
    before(() => {
        cy.visit('/')
    })

    it('verify register test case', function(){
        register.createAccount(fakeData.email)
        register.verifyCreateAccountNAvigationPage()
        register.checkRadioButton()
        register.verifyRadioButtonIsCheck()
        register.enterUserDetailsForm(fakeData.firstName, fakeData.lastName)
        register.verifyEmailAddress(fakeData.email)
        register.enterPassword(fakeData.password)
        register.enterBirthDate()
        register.verifyBirthDate()
        register.clickCheckBox()
        register.verifyCheckBox()
        register.EnterAddressInfoForm()
    })

    it('verify User Login test case', ()=>{
        logIn.getAccountDetails(fakeData.firstName,fakeData.lastName)
        logIn.clickOnSignOut()
        logIn.verifyLogOut()
        logIn.signinAccount(fakeData.email,fakeData.password)
        logIn.verifySigninAccount(fakeData.firstName,fakeData.lastName)
    })

    it('Add product to cart and checkout test case', function(){
        index.verifySearchProducts(data.productname)
        index.getProductQuantity()
        index.clickOnListView()
        index.verifyListView()
        index.clickOnAddToCart()
        index.clickOnCloseWindow()
        index.verifyCartAndQuantityCountOfProducts()
    })
})