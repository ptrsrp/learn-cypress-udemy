/// <reference types = "cypress"/>

describe('Test Contact Us from via WebdriverUni', () => {
    it('Should be able to submit a successful submission via contact us form', () => {
        //cypress code
       cy.visit('https://www.webdriveruniversity.com')
       //multiple browser tab
       cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
       cy.document().should('have.property','charset').and('eq','UTF-8')
       cy.title().should('include','WebDriver | Contact Us')
       cy.url().should('include','contactus')
       cy.get('[name="first_name"]').type("Poetri")
       cy.get('[name="last_name"]').type("Sri")
       cy.get('[name="email"]').type("haha@gmail.co")
       cy.get('textarea.feedback-input').type("learn cypress")
       cy.get('[type="submit"]').click()
       //assert
       cy.get('h1').should('have.text','Thank You for your Message!')

    });
    it('Should not be able to submit a successful submission via contact us form as all field are required ', () => {
        //cypress code
        cy.visit('https://www.webdriveruniversity.com')
       //multiple browser tab
       cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
       cy.get('[name="first_name"]').type("Poetri")
       cy.get('[name="last_name"]').type("Sri")
       cy.get('textarea.feedback-input').type("learn cypress")
       cy.get('[type="submit"]').click()
       //assert
       cy.get('body').contains('Error: all fields are required')//.and('include.text','Error: Invalid email address')
    });
});