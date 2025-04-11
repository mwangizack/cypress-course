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

  it.only("Adds and removes grudges", () => {
    cy.contains(/Add Some Grudges/i);

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });

    cy.getDataTest("grudge-input").type("some grudge");
    cy.getDataTest("add-grudge-button").click();
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });

    cy.getDataTest("grudge-input").type("another grudge");
    cy.getDataTest("add-grudge-button").click();
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 2);
    });

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").its(0).should("contain.text", "some grudge");
      cy.get("li").its(1).should("contain.text", "another grudge");
    });

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li")
        .its(0)
        .within(() => {
          cy.get("button").click();
        });
      cy.contains(/some grudge/i).should("not.exist");
    });

    cy.getDataTest("clear-button").click();
    cy.contains(/another grudge/i).should("not.exist");
  });
});
