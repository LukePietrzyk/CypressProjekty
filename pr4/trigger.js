/// <reference types="cypress"/>
describe("E2E - skrolowanie/najechanie ", () => {
  it("Najechanie na element", () => {
    cy.visit("https://demo.nopcommerce.com");
    cy.get('[href="/computers"]')
      .should("contain", "Computers")
      .eq(0)
      .trigger("mouseover")
      .trigger("focus");
    cy.get(`ul.sublist a[href="/software"]`)
      .should("contain", "Software")
      .eq(0)
      .click();
  });
});
