import loginPage from "../../../pages/loginPage/loginPage.js";
import loginData from "../../../fixtures/loginPage/loginData.json";

describe("Login Page functionality - Negative scenarios", () => {
    beforeEach(() => {
    cy.visit(loginData.loginUrl);
    })
  it("TC:004 - Should not Login with empty fields", () => {
    loginPage.signInButton.click();

    loginPage.emailError.contains("p", loginData.errorMessages.emailError).should("be.visible");
    loginPage.passwordError.contains("p", loginData.errorMessages.passwordError).should("be.visible");
  });

  it("TC:005 - Should not Login with invalid email", () => {
    loginPage.login(loginData.invalidEmail, Cypress.env("USER_PASSWORD"));

    loginPage.emailError.contains("p", loginData.errorMessages.accountNotFound).should("be.visible");
  });

  it("TC:006 - Should not Login with invalid password", () => {
    loginPage.login(Cypress.env("USER_EMAIL"), loginData.invalidPassword);

    loginPage.passwordError.contains("p", loginData.errorMessages.incorrectPassword).should("be.visible");
  });

  it("TC:007 - Should not Login with invalid credentials", () => {
    loginPage.login(loginData.invalidEmail, loginData.invalidPassword);

    loginPage.emailError.contains("p", loginData.errorMessages.accountNotFound).should("be.visible");
  });
});
