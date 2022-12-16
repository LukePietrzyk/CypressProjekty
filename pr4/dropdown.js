/// <reference types="cypress"/>
describe("Testy E2E - akcja wybrania select", () => {
  it("Wybieranie opcji", () => {
    cy.visit(
      "https://practice.automationtesting.in/product-category/html/?orderby=date"
    );
    // po nawwie
    cy.get(".orderby").select("Sort by populariyty");
  });
});
