class ProductsPage {
    constructor() {}        

    geteShopTab(){
        return cy.get(':nth-child(2) > .nav-link');
    }

    getCheckOutButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    }
}

export default ProductsPage;