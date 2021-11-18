describe('Users API testing', function() {

    beforeEach(function() {
        cy.request('https://jsonplaceholder.typicode.com/users').as('users')
    })

    it('should return 200 status code', function() {
        cy.get('@users').its('status').should('be.equal', 200)
    })

    it('should return 10 users', function() {
        cy.get('@users').its('body').should('have.length', 10)
    })

})