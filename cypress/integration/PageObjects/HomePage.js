class HomePage {
    constructor(){

    }
    
    getName(){
        return cy.get(".form-group input[name='name']");
    };

    getGender(){
        return cy.get("#exampleFormControlSelect1");
    }

    getTwoWayBindingText(){
        return cy.get("div.container h4 input[name='name");
    }

    getMinlengthPropOfName(){
        return cy.get(':nth-child(1) > .form-control');
    }

    getEntrepreneur(){
        return cy.get('#inlineRadio3');
    }
}

export default HomePage;