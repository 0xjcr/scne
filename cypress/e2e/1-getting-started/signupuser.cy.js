/// <reference types="cypress" />

describe("user signup page", () => {
  it("visits the signup page successfully", () => {
    cy.visit("http://localhost:3000/join");
  });

  it("should navigate to login page on successful creation", () => {
    cy.visit("http://localhost:3000/join");
    cy.get(".firstname").type("test");
    cy.get(".lastname").type("test");
    cy.get(".email").type("test@email.com");
    cy.get("#outlined-basic-password").type("test");
    cy.get("#simple-select").click();
    cy.contains("Barcelona").click();
    cy.get(".createbtn").click();
    cy.location("pathname").should("match", /^\/$/);
  });

  it("should navigate to profile on successful login", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".email").type("test@email.com");
    cy.get(".password").type("test");
    cy.get(".submitbtn").click();
    cy.location("pathname").should("include", "/profile/");
  });
});
