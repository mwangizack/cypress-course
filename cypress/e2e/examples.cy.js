describe('examples test', () => {

    it ('Contains the examples heading', () => {
        cy.visit('/examples')
        cy.get('h1').contains(/Examples/i)
    })

    it ('Multi-page testing', () => {
        cy.visit('/')
    })
})