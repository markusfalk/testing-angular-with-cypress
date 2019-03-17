describe('Login', () => {

  beforeEach(() => {
    cy.login();
  });

  it('checks correct greeting', () => {
    cy.get('[data-cy=greetContainer]').then(($greetContainer) => {
      if ($greetContainer.hasClass('day')) {
        cy.get('[data-cy=day]').should('have.text', 'Guten Tag');
      } else {
        cy.get('[data-cy=night]').should('have.text', 'Guten Abend');
      }
    });
  });

});
