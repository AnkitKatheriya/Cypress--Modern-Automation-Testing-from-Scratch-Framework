describe.skip(`Advance automation to handling Alerts, popups, Child Windows using cypress and jQuery`, () => {
    
    it(`Visit to the automation practice page`, () => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');
    });
    
    it(`Handling Alert and Pop Up box`, () => {
        cy.get("#alertbtn").click();
        cy.on('window:alert', (str) => {
            expect(str).to.be.equal("Hello , share this practice page and share your knowledge");
        });
        cy.get("#confirmbtn").click();
        cy.on('window:confirm', (str) => {
            expect(str).to.be.equal("Hello , Are you sure you want to confirm?");
        });
    });

    it(`Handling Child tab with combination of Cypress & jQuery commands`, () => {
        // Cypress doesnot support child tab navigation, it probalily runs non flicky test - means on a sigle browser and in a single tab(no new tab)
        // So to achieve the testing of this behaviour we would require to use jQuery method removeAttr - The whole idea bhind this is to remove target attribute from the DOM the try to open the link on the same tab, so that cypress can handle this.
        // to run the removeAttr function we will invoke method which run the function passes to it.
        cy.get("#opentab").invoke('removeAttr', 'target').click();
        cy.url().should('include', 'rahulshettyacademy');
    });

    it(`Navigating to browser controls using Cypress`, () => {
        cy.go('back');
        //cy.go('forward');
    })

    it(`Handling web tables using Cypress using each command`, () => {
        cy.get("#product tbody > tr > td:nth-child(2)").each( ($el, index, $list) => {
            const text = $el.text();
            if(text.includes("Python")){
                //As we can only perform .next() method with get command
                cy.get("tr td:nth-child(2)").eq(index).next().then((price) => {
                    const priceText = price.text();
                    expect(priceText).to.be.equal('25');
                })
            }
        });
    });

    it(`Handling Mouse over popup using Cypress`, () => {
        // Cypress does not support this feature directly, but we can handle it using jQuery
        //cy.get("div.mouse-hover-content").invoke('show');
        cy.contains('Top').click({ force: true });
        cy.url().should('include', 'top');
    });

    it(`Handling child windows usng cypress`, () => {
        // Cypress also does not supprt it, but probabily ther is a workaround
        cy.get("#opentab").then((el) => {
            const url = el.prop('href');
            cy.log(url);
            cy.visit(url);
        })
    });
})