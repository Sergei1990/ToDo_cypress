describe('Test to edit any to-do', function() {

    it('should edit an activity if present', function() {
        cy.visit('https://todomvc.com/examples/react/#/')
        cy.get('h1').should('have.text', 'todos')

        //add or remove comment to check
        //cy.get('input[class="new-todo"]').type('firstActivity{enter}')
        //cy.get('input[class="new-todo"]').type('firstActivity{enter}')
        //cy.get('input[class="new-todo"]').type('firstActivity{enter}')

        cy.get('body').then(($body) => {
            if ($body.text().includes('Active')) {
                cy.get('div[class="view"]')//.parents('div')
                .dblclick()
                cy.focused().should('have.class', 'edit').and('be.visible')
                .type('{selectall}{backspace}')
                .type('edited activity{enter}')
                cy.contains('li', 'edited activity').should('be.visible')
            } else {
              return
            }
        })
    })
})