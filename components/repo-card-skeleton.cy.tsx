import React from 'react'
import { RepoCardSkeleton } from './repo-card'

describe('<RepoCardSkeleton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RepoCardSkeleton />)
  })
})