describe('ToDo API testing', function() {

    it('return a JSON data', function() {
        cy.request('https://jsonplaceholder.typicode.com/todos')
          .its('headers')
          .its('content-type')
          .should('include', 'application/json')
    })

})