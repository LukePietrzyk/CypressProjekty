/// <reference types="cypress"/>
describe("Wgrywanie pliku ", () => {
  it("Wgrywanie pliku contact us", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    cy.get("#inputGroupFile02").attachFile("../fixtures/123.jpg");
    cy.get("#span-name").should("contain", "123.jpg");
  });
});
