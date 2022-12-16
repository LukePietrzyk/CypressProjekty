/// <reference types="cypress"/>

describe("Testy E2E", () => {
  it("Invoke", () => {
    cy.visit("https://www.telerik.com/support/demos");

    //Pobieranie wartoscii z danego elementu
    cy.get('[aria-label="Sitefinity CMS content"]')
      .invoke("text")
      .then((tekst) => {
        cy.log(tekst);
      });

    //uzyskanie dostepu do danego atrybutu
    cy.get('[aria-label="Sitefinity CMS content"]')
      .invoke("attr", "href")
      .then((link) => {
        cy.log(link);
      });
  });
});
