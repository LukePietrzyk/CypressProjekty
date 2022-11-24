/// <reference types="cypress"/>

describe("Testy API", () => {
  beforeEach(function () {
    cy.fixture("example").then((data) => {
      this.daneApi = data;
    });
  });

  it("Verification API tags", () => {
    cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTag");
    cy.visit("https://angular.realworld.io");
    cy.wait("@requestTag");
    cy.get("@requestTag").then((res) => {
      console.log(res);
      expect(res.response.statusCode).to.equal(200);
      expect(res.response.body.tags)
        .to.contains("welcome")
        .and.to.contains("implementations");
    });
  });

  it("Wrong login or password", function () {
    cy.intercept("post", "https://api.realworld.io/api/users/login").as(
      "wrongLogin"
    );
    cy.get("a.nav-link").contains("Sign in").click();
    cy.url().should("include", "login");
    cy.get(`[placeholder="Email"]`).type("LukaszPietrzyk");
    cy.get(`[placeholder="Password"]`).type("Pietrzyk");
    cy.get(".btn").should("be.visible").click();
    cy.wait("@wrongLogin");
    cy.get("@wrongLogin").then((repLogin) => {
      expect(repLogin.response.statusCode).to.equal(403);
      expect(repLogin.response.statusMessage).to.equal(
        this.daneApi.statusMessage403
      );
    });
  });

  it("Correct login", function () {
    cy.url().should("contain", "login");
    cy.get(`[placeholder="Email"]`).clear();
    cy.get(`[placeholder=Password]`).clear();
    cy.get(`[placeholder="Email"]`).type("xvhakaylvkkcluixnv@tmmcv.com");
    cy.get(`[placeholder=Password]`).type("123456789");
    cy.get(".btn").contains("Sign in").should("be.visible").click();
  });
});
