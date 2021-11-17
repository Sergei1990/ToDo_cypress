describe('Test To-Do application', function() {

    it('should open To-Do application page', function() {
        cy.visit('https://todomvc.com/examples/react/#/')
        cy.get('h1').should('have.text', 'todos')
    })

    it('should add three tasks', function() {
        addActivity('firstActivity', 1)
        addActivity('secondActivity', 2)
        addActivity('thirdActivity', 3)
    })

    it('should edit a tasks', function() {
        cy.get('body').then(($body) => {
            if ($body.text().includes('Active')) {
                cy.get('input[value="quis ut nam facilis et officia qui"]').parents('div')
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

    it('should Complete one tasks', function() {
        cy.get('input[value="delectus aut autem"]')
          .siblings('div[class="view"]')
          .find('input[type="checkbox"]').click()
        cy.get('input[value="delectus aut autem"]').parents('[class="completed"]')
    })

    it('should delete one tasks', function() {
        cy.contains('li', 'edited activity')         
          .find('button[class="destroy"]')
          .invoke('show').click()
    })

    it('should verify that All tabs have two tasks, one completed and one active', function() {
        cy.get('input[value="delectus aut autem"]').parents('[class="completed"]')
        cy.get('input[value="fugiat veniam minus"]').parents('[class="completed"]').should('not.exist')
    })

    it('should verify that Active tab has one task', function() {
        cy.get('a[href="#/active"]').click()
        cy.get('input[value="delectus aut autem"]').should('not.exist')
        cy.get('input[value="fugiat veniam minus"]').should('exist')
    })

    it('should verify that Completed tab has one task', function() {
        cy.get('a[href="#/completed"]').click()
        cy.get('input[value="delectus aut autem"]').should('exist')
        cy.get('input[value="fugiat veniam minus"]').should('not.exist')
    })

    it('should Complete all tasks', function() {
        cy.get('a[href="#/"]').click()
        cy.get('label[for="toggle-all"]').click()
        cy.get('input[value="delectus aut autem"]').parents('[class="completed"]')
        cy.get('input[value="fugiat veniam minus"]').parents('[class="completed"]')
    })

    it('should Clear completed tasks', function() {
        cy.get('button[class="clear-completed"]').click()
        cy.get('section[class="main"]').should('not.exist')
        cy.get('footer[class="footer"]').should('not.exist')
    })

    function addActivity(activityName, number) {
        cy.request('https://jsonplaceholder.typicode.com/todos/' + number).then((res) => {
            activityName = res.body.title
            cy.get('input[class="new-todo"]').type(activityName + '{enter}')
            cy.get('ul[class="todo-list"]').contains(activityName)
        })
    }

})
