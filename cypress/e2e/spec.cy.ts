describe('My First Test', () => {
  it('Should be show the page title', () => {
    cy.visit('/')
    cy.contains('Bookly')
  });
})
