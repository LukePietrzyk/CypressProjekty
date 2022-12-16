/// <reference types="cypress"/>

describe("Login on react-redux.realworld.io/#/login", () => {
  it("Should Sign in", () => {
    cy.visit("/");
    cy.get('input[type="email"]').type("xvhakaylvkkcluixnv@tmmcv.com");
    cy.get('input[type="password"]').type("123456789");
    cy.get(".btn").contains("Sign in").should("be.visible").click();
  });
});
