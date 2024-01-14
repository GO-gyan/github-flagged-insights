describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('should load home page', () => {
        cy.location('pathname').should('eq', '/');
        cy.get('header').should('be.visible');
        cy.get('main').should('be.visible');
        cy.get('h1').should('have.text', 'Repos');

    })
    it('should make an XHR request', () => {
        cy.request('https://api.github.com/search/repositories?sort=stars&q=javascript&per_page=10&page=1')
            .should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('total_count');
                expect(response.body).to.have.property('incomplete_results');
                expect(response.body).to.have.property('items').and.be.an('array').and.have.lengthOf(10);
                expect(response).to.have.property('headers');
                expect(response).to.have.property('duration');
            })
    })
    it('should click flag button and store id in local storage', () => {
        cy.get("[data-cy='toggle-repo-visibility']").first().click();
        cy.get("[data-sonner-toaster='true']").should("contain", "Added visibility of repo: 28457823");
        cy.getAllLocalStorage().should((storageMap) => {
            console.log(storageMap);
            expect(storageMap).to.deep.equal({
              // other origins will also be present if localStorage is set on them
              'http://localhost:3000': {
                'visibleRepos': "[\"28457823\"]",
              },
            })
          })
    })
    it('should click flag button and remove id from local storage', () => {
        cy.get("[data-cy='toggle-repo-visibility']").first().click();
        cy.get("[data-cy='toggle-repo-visibility']").first().click();
        cy.get("[data-sonner-toaster='true']").should("contain", "Removed visibility of repo: 28457823");
        cy.getAllLocalStorage().should((storageMap) => {
            console.log(storageMap);
            expect(storageMap).to.deep.equal({
              // other origins will also be present if localStorage is set on them
              'http://localhost:3000': {
                'visibleRepos': "[]",
              },
            })
          })
    })
})