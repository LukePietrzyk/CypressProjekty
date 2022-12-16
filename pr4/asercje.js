/// <reference types="cypress"/>
describe("Asercje E2E ", () => {
  it("Asercjer expect oraz should", () => {
    cy.visit("https://react-shopping-cart-67954.firebaseapp.com/");
    cy.get(".github-button").should("contain", "Star").should("be.visible");
    cy.get(".github-button").then((zakladka) => {
      expect(zakladka).to.contain("Star");
    });
    // czy nie zawiera danej frazy

    cy.get(".github-button").should("not.contain", "star");
    cy.get(".github-button").then((notContener) => {
      expect(notContener).not.to.contain("XD");
    });
    // sprawdzanie czy zawiera classe
    cy.get(".sc-124al1g-1 ").should("have.class", "csvtPz");
    cy.get(".sc-124al1g-1").then((czyClass) => {
      expect(czyClass).to.have.class("sc-124al1g-1");
    });
    // Widocznosc elementu
    cy.get(".sc-124al1g-1").should("be.visible");
    cy.get(".sc-124al1g-1").then((widocznosc) => {
      expect(widocznosc).to.be.visible;
    });
    // weryfikacja ilosci elementow
    cy.get("div.dwOYCh").find("div").should("have.length", 3);
    cy.get("div.dwOYCh")
      .find("div")
      .then((iloscEle) => {
        expect(iloscEle).to.have.length(3);
      });
    //Weryfikacja wartosc css ele

    cy.get(".csvtPz").should("have.css", "height", "320px");
    cy.get(".csvtPz").then((pierZdj) => {
      expect(pierZdj).to.have.css("height", "320px");
    });
  });
});
