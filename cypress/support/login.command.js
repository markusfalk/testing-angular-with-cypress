Cypress.Commands.add('login', (username, password) => {

  cy.request({
    url: 'http://localhost:3000/api/login',
    method: 'POST',
    body: {username, password},
  }).then(() => {
    cy.visit('http://localhost:4200/dashboard/')
  });

});
