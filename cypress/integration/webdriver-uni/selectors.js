/// <reference types = "cypress"/>

describe('Selector example', () => {
    it('Examples of Selectors via WebDriverUni Contact Us Page', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

        //By tag name
        cy.get("input")

        //By attribute name and value
        cy.get("input[name='first_name']")

        //By id
        cy.get("#contact_me")

        //By class
        cy.get(".feedback-input")

        //By multiple classes
        cy.get("[class='navbar navbar-inverse navbar-fixed-top']")

        //By two different attribute
        cy.get("[name='email'][placeholder='Email Address']")

        //By xpath
        cy.xpath("//input[@name='first_name']")


    });
});