
describe("Testing cleartrip site", () => {
    it("Testing First Web page of cleartrip", () => {
        cy.visit('https://www.cleartrip.com/')
        cy.get('li.humbger').click();
        cy.get('.radio__input').eq(1).click();
        cy.get("input[placeholder='Any worldwide city or airport']").eq(1).click();
        cy.get("input[placeholder='Any worldwide city or airport']").eq(2).click();
        cy.get('div.homeCalender>button:nth-child(1)').click().type('Sat,jul 10');
        cy.get('div.homeCalender>button:nth-child(2)').click().type('Sat,jul 11');
    })
})