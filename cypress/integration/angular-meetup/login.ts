describe('Home page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/login/');
  });

  it('should redirect to dashboard after login', () => {
    cy.get('[data-cy=username]').type('markus');
    cy.get('[data-cy=password]').type('geheim');
    cy.get('[data-cy=login-form]').submit();
    cy.url().should('equal', 'http://localhost:4200/dashboard');
  });

});
