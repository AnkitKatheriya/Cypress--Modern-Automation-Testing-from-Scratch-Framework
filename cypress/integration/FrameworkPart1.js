import HomePage from './PageObjects/HomePage';
import ProductsPage from './PageObjects/ProductsPage';

describe(`Lets start to disscuss the framework related topics`, () => {   
    const HomePageObj = new HomePage();
    const ProductPageObj = new ProductsPage();
    beforeEach(function(){        
        cy.fixture('example').then(function(data) {
            cy.log(data);
            this.data = data;
        })
    });

    it(`Navigate to the URL`, () => {
        //cy.visit("https://rahulshettyacademy.com/angularpractice/");
        
        // Visiting the urls and setting global values using custom configuration in Cypress
        cy.visit(Cypress.env('url') + "/angularpractice/");

        // Setting env variables through command line
        
    })

    it(`Input the text and select the dropdown`, function(){
        cy.log(this.data);
        // cy.get(".form-group input[name='name']").type(this.data.name);
        // cy.get("#exampleFormControlSelect1").select(this.data.gender);          
        HomePageObj.getName().type(this.data.name);
        HomePageObj.getGender().select(this.data.gender);        
    });

    it(`Add element to the cart`, function(){

        // Test debugging and pause with cypress
        // use below mentioned pause method to pause the execution of testcase at the mentioned line of code
        //cy.pause();

        // we can also use the .debug() method to debug the test suite
        //cy.get("div.container h4 input[name='name").should("have.value", "Ankit").debug();

        // Timetravel is also a part of debugging the application, so to use it click on the cypress result tree and navigate to console to see the objects values.

        // cy.get("div.container h4 input[name='name").should("have.value", "Ankit")
        // cy.get(':nth-child(1) > .form-control').should("have.attr", "minlength");
        // cy.get('#inlineRadio3').as("disabledButton").should("to.be.disabled");

        HomePageObj.getTwoWayBindingText().should("have.value", "Ankit")
        HomePageObj.getMinlengthPropOfName().should("have.attr", "minlength");
        HomePageObj.getEntrepreneur().as("disabledButton").should("to.be.disabled");
        //cy.get("@disabledButton").check({force: true}); 

        //cy.get(':nth-child(2) > .nav-link').click(); 
        
        ProductPageObj.geteShopTab().click();                
        // Moved below code inside support folder in command.js file to make it global use for cypress in current project
        // cy.get("app-card-list app-card div.card-body a").each( ($el, index, $list)  => {
        //     if($el.text().includes("iphone X")){
        //         cy.get("app-card-list app-card div.card-footer button").eq(index).click();
        //     }
        //  })
        cy.log(this.data);
        this.data.productNames.forEach(function(element){
            cy.addProduct(element)
        })

        ProductPageObj.getCheckOutButton().click();

        // It will applicable for only one testcase
        Cypress.config('defaultCommandTimeout', 8000);
    });

    // Important Notes;
    // cy.fixture() is not working with arrow function, so always use callback function. Also need to explore more with arrow function
    // To include the cy.fixture() object wtih every testcase we would require to use beforeEach hook in place of before hook.
})