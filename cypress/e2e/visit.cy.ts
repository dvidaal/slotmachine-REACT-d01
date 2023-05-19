describe("When rendered ", () => {
  it("Then it should show an alarm emoji `🚨`", () => {
    cy.visit("/");
    cy.get(".figures").should("contain", "🚨");
  });

  it("Then it shouldn't show an alarm emoji", () => {
    cy.visit("/");
    cy.contains("ROLL").click();

    cy.should("not.contain", "🚨");
  });
});
