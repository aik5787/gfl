import loginPage from "../../../pages/loginPage/loginPage.js";
import loginData from "../../../fixtures/loginPage/loginData.json";

describe("Login Page functionality - Positive scenario", () => {

  it("TC:003 - Should Login with valid credentials", () => {
    cy.visit(loginData.loginUrl);
    loginPage.login(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"));

    cy.intercept("GET", `${loginData.myAccountUrl}${loginData.overviewPath}`).as("overviewPage");
    cy.wait("@overviewPage");

    cy.origin(
      loginData.myAccountUrl, 
      { args: { loginData } }, 
      ({ loginData }) => {
        cy.visit(loginData.overviewPath);
        
        cy.title().should("eq", loginData.title);
      }
    );
  });
});
