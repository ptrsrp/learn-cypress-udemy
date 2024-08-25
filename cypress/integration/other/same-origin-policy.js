/// <reference types = "cypress"/>

describe('Cypress web security', () => {
    it.skip('Validate visiting two different domains', () => {
        //cypress code
       cy.visit('https://www.webdriveruniversity.com')
       cy.visit("https://google.com/");
    });
    it('Validate visiting two different domains via user actions', () => {
        //cypress code
       cy.visit('https://www.webdriveruniversity.com')
       cy.get('#automation-test-store').invoke('removeAttr','target').click();
    });

    it.only('Origin command', () => {
        //Validate visiting two different domains via origin command
        cy.origin('webdriveruniversity.com', () => {
            cy.visit("/");
            cy.get('#contact-us').should('be.visible')
        })
        cy.origin('google.com', () => {
            cy.visit("/");
        })
        // cy.visit("https://www.webdriveruniversity.com");
        // cy.visit("https://selectors.webdriveruniversity.com")
    });
});