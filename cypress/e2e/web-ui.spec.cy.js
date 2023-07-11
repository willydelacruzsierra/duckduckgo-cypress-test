describe('DuckDuckGo Search', () => {
    it('Searches for "The dev-friendly football API" and validates URL', () => {
        cy.visit('https://duckduckgo.com');

        cy.get('#searchbox_input')
            .type('The dev-friendly football API')
            .should('have.value', 'The dev-friendly football API');

        cy.get('[aria-label="Search"]').click();
        let found = false;
        cy.get('[data-testid="result-title-a"]').filter('[href="https://www.football-data.org/index.php"]').eq(1);
    });
});
