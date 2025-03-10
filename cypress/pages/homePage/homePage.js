class HomePage {
    get toggleLanguageButton() {return cy.get('[data-id="select-language"]')}
    get frenchLanguageLink() {return cy.get('#bs-select-1-1')}
}

export default new HomePage();