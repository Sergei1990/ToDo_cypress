describe('Test to edit to-do', function() {

    it('should open To-Do application page', function() {
        cy.visit('https://todomvc.com/examples/react/#/')
        cy.get('h1').should('have.text', 'todos')
    })

    it('optional step, should add three tasks', function() {
        //add comment to check if test works without any ToDo's
        cy.get('input[class="new-todo"]').type('firstActivity{enter}')
        cy.get('input[class="new-todo"]').type('secondActivity{enter}')
        cy.get('input[class="new-todo"]').type('thirdActivity{enter}')
    })

    it('should edit an activity if present', function() {
        //edit 1st activity
        editActivityByNumber(0)

        //edit 3rd activity
        editActivityByNumber(2)
    })

    function editActivityByNumber(num) {
        cy.get('body').then(($body) => {
            if ($body.text().includes('Active')) {
                cy.get('div[class="view"]').parent('li').eq(num)
                .dblclick()
                cy.focused().should('have.class', 'edit').and('be.visible')
                .type('{selectall}{backspace}')
                .type('edited activity{enter}')
                cy.contains('li', 'edited activity').should('be.visible')
            } else {
              return
            }
        })
    }
})