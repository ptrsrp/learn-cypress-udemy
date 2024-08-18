/// <reference types = "cypress"/>

describe("Iterate over elements", () => {
    it("Log information of all hair care product", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
          cy.log('Index : ' + index + ' Product Name : ' + $el.text())
        })
      });
    it("Add specific product to basket", () => {
      //cypress code
      cy.visit("https://automationteststore.com/");
      cy.get("a[href*='product/category&path=").contains("Hair Care").click();
    
      cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text().includes("Curls to straight Shampoo")) {
          cy.wrap($el).click()
        }
      })
    });
  });
  