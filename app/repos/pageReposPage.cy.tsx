import React from 'react'
import ReposPage from './page'

describe('<ReposPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ReposPage />)
  })
})