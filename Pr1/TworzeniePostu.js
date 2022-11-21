/// <reference types="cypress"/>

describe("Login and create post", () => {
  it("Should Sign in", () => {
    cy.visit("https://react-redux.realworld.io/#/login/");
    cy.title().should("eq", "Conduit");
    cy.location("protocol").should("eq", "https:");
    cy.get('input[type="email"]').type("xvhakaylvkkcluixnv@tmmcv.com");
    cy.get('input[type="password"]').type("123456789");
    cy.get(".btn").contains("Sign in").should("be.visible").click();
    cy.contains("Your Feed", { timeout: 10000 }).should("be.visible");
  });

  it("Create a post", () => {
    cy.contains("New Post").click();
    cy.hash().should("include", "#/editor");
    cy.get('input[placeholder="Article Title"]').type(
      "Pierwszy test automatyczny"
    );
    cy.get('input[placeholder="What\'s this article about?"]').type(
      "Przykladowy test z wpisywaniem danych"
    );
    cy.get('textarea[placeholder="Write your article (in markdown)"]').type(
      "Test"
    );
    cy.get('input[placeholder="Enter tags"').type(
      "Automation testing, cypress"
    );
    cy.contains("Publish Article").click();
    cy.url().should("include", "article");
  });

  it("Mark as favorite", function () {
    cy.get(".nav-link").contains("ScorpionFile1").click();
    cy.contains("My Articles").should("be.visible");
    cy.get(".ion-heart").first().click();
    cy.contains("Favorited Articles").click();
    cy.url().should("include", "favorites");
  });
});