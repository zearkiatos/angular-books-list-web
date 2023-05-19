describe('Suite e2e test for Author details component', () => {
  it('Should be show the page title', () => {
    cy.visit('/authors/2');
    cy.contains('Stephen King');
  });
});
