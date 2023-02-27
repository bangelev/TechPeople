describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should render the navBar menu', () => {
    cy.getBySel('header').should('be.visible')
  })
  it('should render 5 cards', () => {
    cy.get('.box').should('have.length', 5)
  })
  it('Every card should have image and title', () => {
    cy.getBySel('cardImg')
      .eq(0)
      .should('be.visible')
      .and('have.css', 'object-fit', 'cover')
    cy.getBySel('cardTittle').eq(0).should('have.text', 'Technology')

    cy.getBySel('cardImg')
      .eq(3)
      .should('be.visible')
      .and('have.css', 'object-fit', 'cover')
    cy.getBySel('cardTittle').eq(1).should('have.text', 'Nature')
    cy.getBySel('cardImg')
      .eq(2)
      .should('be.visible')
      .and('have.css', 'object-fit', 'cover')
    cy.getBySel('cardTittle').eq(2).should('have.text', 'Family')
    cy.getBySel('cardImg')
      .eq(3)
      .should('be.visible')
      .and('have.css', 'object-fit', 'cover')
    cy.getBySel('cardTittle').eq(3).should('have.text', 'Health')
    cy.getBySel('cardImg')
      .eq(4)
      .should('be.visible')
      .and('have.css', 'object-fit', 'cover')
    cy.getBySel('cardTittle').eq(4).should('have.text', 'Fun')
  })
  it('Should expand on mouseover', () => {
    cy.getBySel('cardImg').eq(0).realHover()
    cy.getBySel('cardTittle').eq(0).should('be.hidden')
  })
  it('Should H link redirect to /parents', () => {
    cy.getBySel('parentsLink').click()
    cy.location('pathname').should('eq', '/parents')
  })
  it('Should render the footer at the bottom of the page', () => {
    cy.get('footer').should('be.visible')
  })
})