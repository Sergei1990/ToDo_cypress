describe('ToDo API testing', function() {

    it('should return a JSON data', function() {
        cy.request('https://jsonplaceholder.typicode.com/todos')
          .its('headers')
          .its('content-type')
          .should('include', 'application/json')
    })

    it('should return task that is not completed', function() {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/todos/5')
          .its('body')
          .its('completed')
          .should('be.equal', false)
      })

    it('should mark activity as complete', function() {
      cy.request('PATCH', 'https://jsonplaceholder.typicode.com/todos/1', { completed: true })
        .its('body')
        .its('completed')
        .should('be.equal', true)
    })

})