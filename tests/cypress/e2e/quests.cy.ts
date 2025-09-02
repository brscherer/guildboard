describe('Quests E2E', () => {
  it('shows quests list', () => {
    cy.visit('http://localhost:5173'); // frontend dev URL
    cy.contains('Guildboard — Quests');
    cy.get('ul').should('exist');
    // visual snapshot (basic)
    cy.screenshot('home-default');
  });
});
