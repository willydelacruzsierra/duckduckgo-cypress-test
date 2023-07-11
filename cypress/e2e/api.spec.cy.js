describe('Testing HTTP code statuses', () => {
    it('should forbid requests without proper auth token', () => {
        cy.request({
            method: 'GET',
            failOnStatusCode: false,
            url: 'https://api.football-data.org/v4/teams/65/matches?status=FINISHED&limit=1',
        }).as('lastMatchRequest');
        cy.get('@lastMatchRequest').then(todos => {
            expect(todos.status).to.eq(403);
        });
    });

    it('should return 200', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.football-data.org/v4/matches',
        }).as('getMatchesRequest');
        cy.get('@getMatchesRequest').then(todos => {
            expect(todos.status).to.eq(200);
        });
    });
});
