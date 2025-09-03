/// <reference types="cypress" />

describe('Quests Page', () => {
  beforeEach(() => {
    cy.visit('/quests'); 
  });

  it('should display a list of quests', () => {
    cy.intercept('GET', '/api/quests', {
      statusCode: 200,
      body: [
        { id: 1, title: 'Slay the Crawler', difficulty: 'easy', reward: '50 gold' },
        { id: 2, title: 'Rescue the Princess', difficulty: 'medium', reward: '200 gold' },
      ],
    }).as('getQuests');

    cy.reload();
    cy.wait('@getQuests');

    cy.contains('Slay the Crawler');
    cy.contains('Rescue the Princess');
  });
});
