describe('Testing the calculator app', () => {

  it('1 + 1 should return 2', () => {
    cy.visit('http://localhost:3000');

    // Verifying we started with a 0.
    cy.contains('.results', 0);

    cy.get('.buttons .number-1').click();
    cy.get('.actions .plus').click();
    cy.get('.buttons .number-1').click();

    cy.get('.actions .equals').click();

    // Verifying the results.
    cy.contains('.results', 3);
  });
});
