/// <reference types = "cypress"/>

describe("Verifying variables, cypress commands and jquery commands", () => {
  it("Navigating to specific product page", () => {
    cy.visit("https://automationteststore.com/");
    // the following will pass but not recommended
    //    const makeupLink = cy.get("a[href*='product/category&path=").contains('Makeup')
    //    const skincareLink = cy.get("a[href*='product/category&path=").contains('Skincare')

    //    makeupLink.click()
    //    skincareLink.click()

    //    const makeupLink = cy.get("a[href*='product/category&path=").contains('Makeup')
    //    makeupLink.click()
    //    const skincareLink = cy.get("a[href*='product/category&path=").contains('Skincare')
    //    skincareLink.click()
    // recommended approach
    cy.get("a[href*='product/category&path=").contains("Makeup").click();
    cy.get("a[href*='product/category&path=").contains("Skincare").click();
  });
  it("Navigating to specific product page", () => {
    //cypress code
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=").contains("Makeup").click();

    cy.get("h1 .maintext").then((headerText) => {
      const headertext = headerText.text(); 
      cy.log("Found header text: " + headertext);
      expect(headertext).to.eq('Makeup')
    });
  });
  it.only("Validate properties of the Contact Us Page", () => {
    cy.visit('https://automationteststore.com/index.php?rt=content/contact')

    //uses cypress commands and chaining
    cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name:')

    //jquery approach
    cy.contains('#ContactUsFrm','Contact Us Form').then(text => {
      const fistNameText = text.find('#field_11').text()
      expect(fistNameText).to.contain('First name')
    })

    //embedded commands (closure)
    cy.get('#field_11').then(fnText => {
      cy.log(fnText.text())
      cy.log(fnText)
    })
  });
});
