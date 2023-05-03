/// <reference types="cypress" />

describe("scne login page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("visits the login page successfully", () => {
    cy.visit("http://localhost:3000/");
  });

  it("should navigate to profile on successful login", () => {
    cy.get(".email").type("james@gmail.com");
    cy.get(".password").type("james");
    cy.get(".submitbtn").click();
    cy.location("pathname").should("include", "/profile/4");
  });

  it("should not navigate when email or password is incorrect", () => {
    cy.get(".email").type("fakeemail@email.com");
    cy.get(".password").type("wrongpassword");
    cy.get(".submitbtn").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("invalid login credentials");
    });
  });
});
