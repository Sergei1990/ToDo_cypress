# ToDo_cypress

To use **npx** comand Node.js version 5.2 or above is required

**Without Docker:**
Go to the project folder

1) Install Cypress (2-3 min): npx cypress install

2) Run tests: npx cypress run


**With Docker:**
Go to the project folder

1) To build: docker build -t cypress-image:1.0.0 .

2) To run without build: docker run -t cypress-image:1.0.0 .
