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
      cy.contains('.results', 2);
    });

    it('5 + 1 should raise the modal', () => {
      cy.visit('http://localhost:3000');

      // Verifying we started with a 0.
      cy.contains('.results', 0);

      cy.get('.buttons .number-5').click();
      cy.get('.actions .plus').click();
      cy.get('.buttons .number-1').click();

      cy.get('.actions .equals').click();

      // Verifying the results.
      cy.get('div.not-working').should('be.visible');
    });

    it('Verify we can catch any exception', () => {
        cy.visit('/')

        cy.server();

        // Hijacking the response from the server; The error in the app is raised because the `response.json()`
        // throws an exception due to not a valid JSON response.
        cy.route(() => {
            return {
                method: 'GET',
                url: '/calculator/plus/*/*',
                status: 500,
                response: "this is an error!!!",
            }
        })

        // Verifying we started with a 0.
        cy.contains('.results', 0);

        cy.get('.buttons .number-5').click();
        cy.get('.actions .plus').click();
        cy.get('.buttons .number-6').click();

        cy.get('.actions .equals').click();

        // Verifying the results.
        cy.get('div.not-working').should('be.visible');
    });

    it('Returning a different number, just to show we can return any result we want! 💪', () => {
        cy.visit('/')

        cy.server();

        // Hijacking the response from the server.
        cy.route(() => {
            return {
                method: 'GET',
                url: '/calculator/plus/*/*',
                status: 200,
                response: {
                    results: 2
                }
            }
        })

        // Verifying we started with a 0.
        cy.contains('.results', 0);

        cy.get('.buttons .number-5').click();
        cy.get('.actions .plus').click();
        cy.get('.buttons .number-6').click();

        cy.get('.actions .equals').click();

        // Verifying another error.
        cy.contains('.results', 2);
    });
});
