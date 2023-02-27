import React from 'react'
import IndexCard from './IndexCard'

describe('<IndexCard />', () => {
  beforeEach(() => {
    cy.mount(<IndexCard category={'Fun'} />)
  })

  it('Image should be visible', () => {
    cy.getBySel('cardImg').should('be.visible')
  })
  it('Have card tittle', () => {
    cy.getBySel('cardTitle').should('have.text', 'Fun')
  })
  // it('Image should have cover property', () => {
  //   cy.getBySel('cardTitle').should('have.css', 'object-fit', 'cover')
  // })
  it('Image should have display property as block', () => {
    cy.getBySel('cardTitle').should('have.css', 'display', 'block')
  })
})
