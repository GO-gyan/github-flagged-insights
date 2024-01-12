import React from 'react'
import RepoCard from './repo-card'

describe('<RepoCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RepoCard />)
  })
})