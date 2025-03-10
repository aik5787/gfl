class LoginPage {
    get emailInput() {return cy.get('[name="Email Address"]')}
    get passwordInput() {return cy.get('[name="Password"]')}
    get signInButton() {return cy.get('#next')}
    get myProfileLink() {return cy.get('[id="tour-profile-nav"]')}
    get emailError() {return cy.get('.error')}
    get passwordError() {return cy.get('.error')}

    login(userEmail, userPassword) {
        this.emailInput.type(userEmail);
        this.passwordInput.type(userPassword);
        this.signInButton.click();
    }
}

export default new LoginPage();