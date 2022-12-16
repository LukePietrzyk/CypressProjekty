/// <reference types="cypress"/>
describe("Alerty E2E ", () => {
  it("Alerty", () => {
    cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/");
    cy.wait(500);
    cy.get("#alert").contains("Alert").click();
    cy.on("window:alert", (tet) => {
      expect(tet).to.equal("Przykładowa treść alertu");
    });
  });

  it("Alert confirm", () => {
    cy.get("#alert-confirm").click();
    cy.on("window:confirm", (tresc) => {
      expect(tresc).to.equal("Zaakceptuj aby kontynuować!");
    });
  });
});
