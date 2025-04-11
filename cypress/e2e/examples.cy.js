describe("examples test", () => {
  beforeEach(() => {
    cy.visit("/overview");
  });

  it("Contains the examples heading", () => {
    cy.visit("/examples");
    cy.get("h1").contains(/Examples/i);
  });

  it("Multi-page testing", () => {
    cy.get("[data-test=nav-why-cypress]").click();
    cy.location("pathname").should("equal", "/");

    cy.get("[data-test=nav-fundamentals]").click();
    cy.location("pathname").should("equal", "/fundamentals");

    cy.get("[data-test=nav-forms]").click();
    cy.location("pathname").should("equal", "/forms");

    cy.get("[data-test=nav-examples]").click();
    cy.location("pathname").should("equal", "/examples");

    cy.get("[data-test=nav-component]").click();
    cy.location("pathname").should("equal", "/component");

    cy.get("[data-test=nav-best-practices]").click();
    cy.location("pathname").should("equal", "/best-practices");
  });
});
