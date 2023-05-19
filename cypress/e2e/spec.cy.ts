describe('My First Test', () => {
  it('My first Test', () => {
    cy.visit('/')
    cy.contains('Bookly')
  })
})
