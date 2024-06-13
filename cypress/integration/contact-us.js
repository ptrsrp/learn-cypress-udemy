/// <reference types = "Cypress"/>

describe('Test Contact Us from via WebdriverUni', () => {
    it('Should be able to submit a successful submission via contact us form', () => {
        //cypress code
       cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
       //cy.get('#contact-us').click({force:true})
       cy.get('[name="first_name"]').type("Poetri")
       cy.get('[name="last_name"]').type("Sri")
       cy.get('[name="email"]').type("haha@gmail.co")
       cy.get('textarea.feedback-input').type("learn cypress")
       cy.get('[type="submit"]').click()
    });
    it('Should not be able to submit a successful submission via contact us form as all field are required ', () => {
        //cypress code
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
       //cy.get('#contact-us').click({force:true})
       cy.get('[name="first_name"]').type("Poetri")
       cy.get('[name="last_name"]').type("Sri")
       cy.get('textarea.feedback-input').type("learn cypress")
       cy.get('[type="submit"]').click()
    });
});