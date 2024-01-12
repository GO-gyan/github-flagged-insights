import React from 'react'
import LoadMore from './load-more'

describe('<LoadMore />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LoadMore />)
  })
})