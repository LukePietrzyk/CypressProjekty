/// <reference types="cypress"/>

describe("Wykonanie zapytania bezposrednio do API", () => {
  beforeEach(function () {
    cy.fixture("example").then((data) => {
      this.daneApi = data;
    });
  });

  it("Autoryzacja + dodawanie artykułu", () => {
    const daneAutoryzacja = {
      user: {
        email: "xvhakaylvkkcluixnv@tmmcv.com",
        password: "123456789",
      },
    };
    cy.request(
      "POST",
      "https://api.realworld.io/api/users/login",
      daneAutoryzacja
    )
      .its("body")
      .then((res) => {
        const authToken = res.user.token;
        const daneArty = {
          article: {
            tagList: ["e2e", "Lukasz", "testyAutomatyczne", "api"],
            title: "test2 - bezposrednio z API",
            description: "test2",
            body: "test2",
          },
        };
        cy.request({
          method: "POST",
          url: "https://api.realworld.io/api/articles/",
          body: daneArty,
          headers: {
            Authorization: "Token " + authToken,
          },
        }).then((res) => {
          expect(res.status).to.equal(200);
        });
      });
  });
});
