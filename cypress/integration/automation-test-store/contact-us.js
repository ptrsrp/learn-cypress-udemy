/// <reference types = "Cypress"/>
/// <reference types = "@cypress/xpath"/>

describe('Test Contact Us from via Automation Test Store', () => {
    it('Should be able to submit a successful submission via contact us form', () => {
        //cypress code
       cy.visit('https://automationteststore.com/')
       //cy.get('.info_links_footer > :nth-child(5) > a').click()
       cy.get("a[href$='contact']").click()
       //cy.xpath("//a[contains(@href, 'contact')]").click()
       cy.get('#ContactUsFrm_first_name').type("Poetri")
       cy.get('#ContactUsFrm_email').type("testest@gmail.co")
       //assert
       cy.get('#ContactUsFrm_email').should('have.attr','name','email')
       cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk order?")
       cy.get("button[title='Submit']").click()
       //assert
       cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
       
    });
});