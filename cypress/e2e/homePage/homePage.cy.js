import verificationData from "../../fixtures/mainPage/verificationData.json";
import homePage from "../../pages/homePage/homePage.js";

describe("Home Page functionality",{ tags: '@smoke' }, () => {
  beforeEach(() => {
    cy.errorHandler();
    cy.visit("/");
  });

  it("TC:001 - Should verify the Home Page title and hero title", () => {
    cy.title().should("eq", verificationData.titleEng);
    cy.get("h1").should("have.text", verificationData.heroTitleEng);
  });

  it("TC:002 -Should switch the language to French", () => {
    homePage.toggleLanguageButton.click();
    homePage.frenchLanguageLink.click();

    cy.title().should("eq", verificationData.titleFr);
    cy.get("h1").should("have.text", verificationData.heroTitleFr);
  });
});
