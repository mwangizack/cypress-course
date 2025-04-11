describe("examples test", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });

  it("Contains the examples heading", () => {
    cy.get("h1").contains(/Examples/i);
  });

  it("Multi-page testing", () => {
    cy.getDataTest("nav-why-cypress").click();
    cy.location("pathname").should("equal", "/");

    cy.getDataTest("nav-fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals");

    cy.getDataTest("nav-forms").click();
    cy.location("pathname").should("equal", "/forms");

    cy.getDataTest("nav-examples").click();
    cy.location("pathname").should("equal", "/examples");

    cy.getDataTest("nav-component").click();
    cy.location("pathname").should("equal", "/component");

    cy.getDataTest("nav-best-practices").click();
    cy.location("pathname").should("equal", "/best-practices");
  });

  it("Intercepts", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    }).as("exampleData");
    cy.getDataTest("post-button").click();
    cy.wait("@exampleData").then((interception) => {
      expect(interception.response.body.name).to.eq(
        "Using fixtures to represent data"
      );
    });
  });
});
