import React from 'react'
import Hint from './hint'

describe('<Hint />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Hint />)
  })
})