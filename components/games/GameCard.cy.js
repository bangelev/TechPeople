import React from 'react'
import GameCard from './GameCard'
import game from '../../cypress/fixtures/game.json'

describe('<GameCard />', () => {
  before(() => {
    cy.fixture('game').as('game')
  })
  beforeEach(() => {
    cy.mount(<GameCard game={game} />)
  })

  it('shows categories', () => {
    cy.getBySel('categoryBtn')
      .first()
      .should('have.text', `# ${game.category[0]}`)
    cy.getBySel('categoryBtn')
      .last()
      .should('have.text', `# ${game.category[1]}`)
  })
  it('shows The name of the GAME, FOOOOTBALL', () => {
    cy.getBySel('gameName').should('have.text', `${game.name}`)
  })
  it('shows the image', () => {
    cy.getBySel('gameImg').should('be.visible', true)
  })
  it('shows game description', () => {
    cy.getBySel('gameDescription').should('have.text', `${game.description}`)
  })
  it('props tooltip hover', () => {
    cy.getBySel('propsBtn').trigger('mouseover')
    cy.getBySel('propsTooltip').should('be.visible', true)
    // cy.contains(`${game.props}`)
  })
  it('props tooltip hover', () => {
    cy.getBySel('durationBtn').trigger('mouseover')
    cy.getBySel('durationTooltip').should('be.visible', true)
    cy.contains(`About ${game.proxPlayingTime} min`)
  })
  it('minAge tooltip hover', () => {
    cy.getBySel('MinAgeBtn').trigger('mouseover')
    cy.getBySel('minAgeTooltip').should('be.visible', true)
    cy.contains(`${game.minAge}`)
  })
  it('shows footer text', () => {
    cy.getBySel('textFooter').should(
      'have.text',
      `Created at: ${game.createdAt.toLocaleString('mk-MK', {
        timeZone: 'UTC',
      })}`
    )
  })
})
