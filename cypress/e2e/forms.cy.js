describe("form test", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("Contains forms header", () => {
    cy.get("h1").contains(/Testing Forms/i);
  });

  it("Submits the email entered in the form", () => {
    cy.getDataTest("email-input").type("xyz@gmail.com");
    cy.contains(/Successfully subbed: xyz@gmail.com!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: xyz@gmail.com!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Successfully subbed: xyz@gmail.com!/i).should("not.exist");

    cy.getDataTest("email-input").type("xyz@gmail.io");
    cy.contains(/Invalid email: xyz@gmail.io!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Invalid email: xyz@gmail.io!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Invalid email: xyz@gmail.io!/i).should("not.exist");

    cy.contains(/Invalid email: !/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Invalid email: !/i).should("exist");
    cy.wait(3000);
    cy.contains(/Invalid email: !/i).should("not.exist");
  });
});
