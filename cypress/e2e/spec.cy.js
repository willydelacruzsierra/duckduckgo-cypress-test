describe('DuckDuckGo Search', () => {
    it('Searches for "The dev-friendly football API" and validates URL', () => {
        cy.visit('https://duckduckgo.com');

        cy.get('#searchbox_input')
            .type('The dev-friendly football API')
            .should('have.value', 'The dev-friendly football API');

        cy.get('[aria-label="Search"]').click();
        let found = false;
        cy.get('[data-testid=mainline] ol li').each((element) => {
            if (element.find('[href="https://www.football-data.org/index.php"]')) {
               found = true;
            }
            return found
        }).then((found) => {
            expect(found).to.be.true;
        });
    });
});
