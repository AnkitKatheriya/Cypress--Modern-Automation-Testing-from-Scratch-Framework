describe.skip(`Handling Web controls UI using Cypress test suite`, () => {
    
    it(`Visit to the automation practice page`, () => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');
    });

    it(`Checkboes related testcases`, () => {
        cy.get("#checkBoxOption1").check().should("be.checked").and("have.value", "option1");;
        cy.get("input[value='option1']").uncheck().should("not.be.checked");
        cy.get(".right-align").find("input[type='checkbox']").check(['option1', 'option2']);
    });

    it(`Static dropdown testcases`, () => {
        cy.get('select').select("option1").should("have.value", "option1");
    });

    it(`Dynamic dropdown testcases`, () => {
        cy.get("#autocomplete").type("ind");
        cy.get(".ui-menu-item div").each(($el, index, $list) => {
            if($el.text() == "India"){
                $el.click();
            }
        });
        cy.get("#autocomplete").should("have.value", "India");
    });

    it(`Validate the hide show button`, () => {
        cy.get("#hide-textbox").click();
        cy.get("#displayed-text").as("displayText").should("not.be.visible");
        cy.get("#show-textbox").click();
        cy.get("@displayText").should("be.visible");
        cy.get("@displayText").should("not.be.hidden");
    });

    it(`Radio button testcases`, () => {
        cy.get("input[name='radioButton']").check("radio1");
        cy.get("input[name='radioButton'][value='radio2']").check().should("be.checked");        
    })
})