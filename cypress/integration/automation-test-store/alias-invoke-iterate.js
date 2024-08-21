/// <reference types = "cypress"/>

describe("Alias, invoke and iterating", () => {
  //combining alias, invoke, variables & iterating through data
  it.only("Calculate title of normal and sale product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
    //     cy.log($el.text())
    // })

    //Mengambil Teks Harga
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice");

    //Inisialisasi itemsTotal
    var itemsTotal = 0;

    //Menghitung Total Harga Item Biasa (Non-Sale)
    cy.get("@itemPrice").then(($linkText) => {
      var itemPriceTotal = 0;
      var itemPrice = $linkText.split("$");
      var i;
      for (i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemPriceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemPriceTotal;
      cy.log("Non sale items total = " + itemPriceTotal);
    });

    //Menghitung Total Harga Item Sale
    cy.get("@saleItemPrice")
      .then(($linkText) => {
        var saleItemsPrice = 0;
        var saleItemPrice = $linkText.split("$");
        var i;
        for (i = 0; i < saleItemPrice.length; i++) {
          cy.log(saleItemPrice[i]);
          saleItemsPrice += Number(saleItemPrice[i]);
        }
        itemsTotal += saleItemsPrice;
        cy.log("Sale items total = " + saleItemPrice);
      })

      //Menggabungkan dan Memverifikasi Total Harga
      .then(() => {
        cy.log("Tthe total price of all products: " + itemsTotal);
        expect(itemsTotal).to.equal(648.5);
      });
  });
});
