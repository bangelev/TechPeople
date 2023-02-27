describe('Initial Test', () => {
  it('visit all games page', () => {
    cy.visit('/games')
    cy.get('h3').should('have.text', 'Here should be listed the GAMES ')

    cy.get('.nextui-grid-container').should('not.be.empty')
  })
})
