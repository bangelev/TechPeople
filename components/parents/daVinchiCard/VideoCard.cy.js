import React from 'react'
import VideoCard from './VideoCard'
import cardData from '../../../cypress/fixtures/cardData.json'

describe('<VideoCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<VideoCard cardData={cardData} />)
  })
})
