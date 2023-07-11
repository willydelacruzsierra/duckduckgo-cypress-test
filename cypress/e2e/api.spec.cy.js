describe('Testing HTTP code statuses', () => {
    it('should return 403 if no auth token is provided', () => {
        cy.request({
            method: 'GET',
            failOnStatusCode: false,
            url: 'https://api.football-data.org/v4/teams/65/matches?status=FINISHED&limit=1',
        }).as('lastMatchRequest');
        cy.get('@lastMatchRequest').then(todos => {
            expect(todos.status).to.eq(403);
        });
    });

    it('should return 400 when token is incorrect', () => {
        cy.request({
            method: 'GET',
            headers: {
                'X-Auth-Token': '8740625ef74847a7b0fb985927dabc1d0'
            },
            failOnStatusCode: false,
            url: 'https://api.football-data.org/v4/competitions/SA/scorers',
        }).as('getMatchesRequest');
        cy.get('@getMatchesRequest').then(todos => {
            expect(todos.status).to.eq(400);
        });
    });

    it('should return 200 when token is correct', () => {
        cy.request({
            method: 'GET',
            headers: {
                'X-Auth-Token': '8740625ef74847a7b0fb985927dabc1d'
            },
            url: 'https://api.football-data.org/v4/competitions/SA/scorers',
        }).as('getMatchesRequest');
        cy.get('@getMatchesRequest').then(todos => {
            expect(todos.status).to.eq(200);
        });
    });
});
