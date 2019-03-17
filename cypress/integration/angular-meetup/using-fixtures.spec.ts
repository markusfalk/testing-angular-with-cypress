describe('Fixtures', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/login/');
  });

  it('should redirect to dashboard after login', () => {
    cy.fixture('user').then((user) => {
      cy.get('[data-cy=username]').type(user.username);
      cy.get('[data-cy=password]').type(user.password);
      cy.get('[data-cy=remember]').check();
      cy.get('[data-cy=login-form]').submit();
      cy.url().should('equal', 'http://localhost:4200/dashboard');
    });
  });

});
