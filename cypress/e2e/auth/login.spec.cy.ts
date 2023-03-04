/// <reference types="cypress"/>

describe("login", () => {
  beforeEach(() => cy.visit("http://localhost:8080/login"));

  it.only("must be login into the application", () => {
    cy.get(".input-group.mt-4 > .container-base-input > .base-input")
      .as("loginInput")
      .type("dashboard@blockhub.builders");
    cy.get(".mt-3 > .container-base-input > .base-input")
      .as("passwordInput")
      .type("dash@123");

    cy.get(".btn").as("button").click();

    cy.intercept(
      "POST",
      "https://blockhub-crm-dev.herokuapp.com/users/auth"
    ).as("login");
    cy.wait("@login").its("response.statusCode").should("eq", 201);
  });
});
