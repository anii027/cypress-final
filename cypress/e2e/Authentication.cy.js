import data from "../fixtures/data.json";

describe("Authentication", () => {
  beforeEach(() => {
    cy.viewport(1200, 730);
    cy.visit("https://testzootopia.loremipsum.ge/ka");
  });
  it("13. ავტორიზაცია ვალიდური მონაცემებით", () => {
    cy["sign-in"](data["existed-user"].mail, data["existed-user"].password);
    cy.get(".exit").should("be.visible");
    cy.get(".srch-cart-prof > .iprof").should("be.visible").click();
    cy.get(":nth-child(1) > .redinput").should("have.value",data["existed-user"]["name"]);
    cy.get(":nth-child(4) > .redinput").should("have.value",data["existed-user"].phone);
    cy.get(":nth-child(2) > .redinput").should("have.value", data["existed-user"].id);
    cy.get(":nth-child(3) > .redinput").should("have.value",data["existed-user"].mail);
  });

});
