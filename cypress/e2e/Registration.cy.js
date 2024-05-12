import data from "../fixtures/data.json";

describe("Registration", () => {
  beforeEach(() => {
    cy.viewport(1200, 730);
    cy.visit("https://testzootopia.loremipsum.ge/ka");
  });
  
    it("1. რეგისტრაცია ვალიდური მონაცემებით", () => {
    cy.get(".iprof").should("be.visible").click();
    cy.contains("გაიარეთ რეგისტრაცია").should("be.visible").click();
    cy.get(":nth-child(1) > .ismile").type(data["new-user"].name);
    cy.get(".ipir").type(data["new-user"].id);
    cy.get(":nth-child(5) > .ipass").type(data["new-user"].password);
    cy.get(":nth-child(2) > .imail").type(data["new-user"].mail);
    cy.get(":nth-child(4) > .itel").type(data["new-user"].phone);
    cy.get('[name="reg_password_confirmation"]').type(data["new-user"].password);

    cy.get("#etx").check({ force: true });
    cy.get(".regsub").click();
  });

  it("12. რეგისტრაცია არსებული მომხმარებლის მონაცემებით", () => {
        cy.get(".iprof").should("be.visible").click();
    cy.contains("გაიარეთ რეგისტრაცია").should("be.visible").click();
    cy.get(":nth-child(1) > .ismile").type(data["new-user"].name);
    cy.get(":nth-child(2) > .imail").type(data["existed-user"].mail);
    cy.get(".ipir").type(data["existed-user"].id);
    cy.get(":nth-child(4) > .itel").type(data['existed-user'].phone);

    cy.get(":nth-child(5) > .ipass").type(data["existed-user"].password);
    cy.get(".reg-form-left > :nth-child(6) > .ipass").type(data["existed-user"].password);
    cy.get("#etx").check({ force: true });
    cy.get(".regsub").click();
    cy.get(".input-div.alert > .imail").should("be.visible");
    cy.contains("ასეთი ჩანაწერი უკვე არსებობს.").should("exist");
  });
});
