// Code from Real World App (RWA)
describe("Cypress Studio Demo", () => {
  beforeEach(() => {
    cy.visit("https://localhost:3000/");
    cy.loginToAuth0(
      Cypress.env("auth0_username"),
      Cypress.env("auth0_password")
    );
  });

  it("logs in", () => {
    cy.contains('[data-cy="dashboard"]');
  });
});
