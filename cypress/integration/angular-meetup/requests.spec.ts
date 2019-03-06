describe('Requests', () => {

  it('should load data', () => {
    cy.request('GET', 'http://localhost:3000/request').then((response) => {
      expect(response.body).to.have.property('foo', 'bar');
    });
  });

});
