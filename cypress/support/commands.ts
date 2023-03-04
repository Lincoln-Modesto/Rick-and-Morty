/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
Cypress.Commands.add("login" as any, (username: any, password: any) => {
  cy.session([username, password], () => {
    cy.visit("http://localhost:8080/login");
    cy.get(".input-group.mt-4 > .container-base-input > .base-input")
      .as("loginInput")
      .type("dashboard@blockhub.builders");
    cy.get(".mt-3 > .container-base-input > .base-input")
      .as("passwordInput")
      .type("dash@123");

    cy.get(".btn").as("button").click();
    cy.intercept(
      "POST",
      "https://blockhub-crm-dev.herokuapp.com/users/auth",
      (req) => {
        req.continue((res) => {
          Cypress.env("token", res.body.access_token);
        });
      }
    ).as("login");
    cy.wait("@login").its("response.statusCode").should("eq", 201);
  });
});
