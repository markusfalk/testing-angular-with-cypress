describe('Home page', () => {
  it('check for title', () => {
    cy.visit('http://localhost:4200/');
    cy.get('[data-cy=title]').should('exist');
  });
});
