import data from "../fixtures/data.json";

describe("Cart", () => {
  beforeEach(() => {
    cy.viewport(1200, 730);
    cy.visit("https://testzootopia.loremipsum.ge/ka");
  });
  it("16. კალათაში პროდუქტის დამატება", () => {
    cy["sign-in"](data["existed-user"].mail, data["existed-user"].password);
    cy.get(".tutiyushi > .tLink").click();
    cy.contains("Versele-Laga NutriBird B18 3 kg").click();
    cy.get(".add-pro").click();
    cy.get(".add-pro").should("contain", "დამატებულია");
    cy.get(".icart > #cart-items-count").should("contain", 1);
    cy.get(".icart").click();
    cy.contains("Versele-Laga NutriBird B18 3 kg").should("be.visible");
  });

  it("17. კალათაში არსებული ერთი კონკრეტული პროდუქტის წაშლა", () => {
    cy["sign-in"](data["existed-user"].mail, data["existed-user"].password);
    cy.get(".tutiyushi > .tLink").click();
    cy.contains("Versele-Laga NutriBird B18 3 kg").click();
    cy.get(".add-pro").click();
    cy.get(".icart").click();
    cy.contains("Versele-Laga NutriBird B18 3 kg").should("be.visible");
    cy.get(".icart").click();
    cy.get(".clear").click();
    cy.get(".empty > p").should("be.visible");
  });
});
