describe('examples test', () => {
    beforeEach(() => {
        cy.visit('/examples')
    })

    it ('Contains the examples heading', () => {
        cy.get('h1').contains(/Examples/i)
    })
})