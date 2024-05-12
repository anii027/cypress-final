Cypress.Commands.add("sign-in", (email, password) => {
  cy.get(".iprof").should("be.visible").click();
  cy.get(":nth-child(5) > .imail").type(email);
  cy.get(".ipass").type(password);
  cy.get(".avtorization > .input-shablon > .form-button").click();
});
