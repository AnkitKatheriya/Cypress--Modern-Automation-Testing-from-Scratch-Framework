/// <reference types="Cypress" />

describe.skip(`This is first test suite`, ()=>{
    it(`This is first test case`, () => {
        expect(true).to.equal(true);
    });

    it(`Visit the rahul shetty url`, function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");        
    })

    it(`Search for the item`, function(){
        cy.get("input[type='search']").type('ca');
        cy.wait(2000);
        // this is getting fail
            //cy.get(".product").should("have.length", 4);
        // Now how to retrieve only visible product
        cy.get(".product:visible").should("have.length", 4);
        // Parent child chaining
        cy.get(".products").as("productLocator"); // aliasing of elements
        cy.get("@productLocator").find(".product").should("have.length", 4);

        // In below command we are making JS code compalible with cypress.
        cy.get("@productLocator").find(".product").should("have.length", 4).then(function(){
            console.log("Converted the JS code compatible with cypress");
        });

        // Below command in JS code
        console.log("Pure JS Code");

        cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click();
        // firing an event
        cy.get("@productLocator").find(".product").each(($el, index, $list) => {
            const itemText = $el.find("h4.product-name").text();
            if(itemText.includes("Cashews")){
                $el.find("button").click();
            }
        });   
        
        // assert if logo text is correctly display
        //cy.get(".brand").should("have.text", "GREEN");
    });

    it(`making a non-Cypress code to cypress friendly`, function(){
        
        // below two line of commands shows the non-cypress code
        // const logo = cy.get(".brand");
        // cy.log(logo.text());

        // below line of command shows the cypress code
        // const logoText = cy.get(".brand").text()
        
        // Below code makes the non-cypress code to cypress friendly, as each cypress command returns a promise and we need to resolve it first to work on it.
        // While in the cypress friendly code cy.get(".brand").text() , a cypress command returns a promise and its sub command like .text() automatically resolves the promise returns by its parent.
        cy.get(".brand").then(function(element){
            cy.log(element.text());
        });        
    })

});

