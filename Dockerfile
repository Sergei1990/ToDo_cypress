#   Base image taken from: https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node16.5.0-chrome94-ff93

RUN mkdir /e2e

WORKDIR /e2e

COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress

RUN npx cypress run

ENTRYPOINT ["npx", "cypress", "run"]

CMD [""]