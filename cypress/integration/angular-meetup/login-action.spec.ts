describe('Login', () => {

  beforeEach(() => {
    cy.login();
  });

  it('should redirect to dashboard after login action', () => {
    cy.url().should('equal', 'http://localhost:4200/dashboard');
  });

});
