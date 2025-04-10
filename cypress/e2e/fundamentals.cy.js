describe("Fundamentals test", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });

  it("Contains correct header text", () => {
    cy.get("[data-test=fundamentals-header]").should(
      "contain.text",
      "Testing Fundamentals"
    );
  });

  it("Hides accordion details by default and displays them when clicked", () => {
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
    cy.get("[data-test=accordion-item-1] div[role=button]").click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible"
    );
    cy.get("[data-test=accordion-item-1] div[role=button]").click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
  });
});
