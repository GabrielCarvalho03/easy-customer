/// <reference types="cypress" />

describe("Customer CRUD", () => {
  it("should to enter in login", () => {
    cy.accessStartPageAndEnterName("Gabriel");
  });

  it("should create a new customer", () => {
    cy.createCustomer("Novo Cliente cypress", 5000, 100000);
  });

  it("should edit an existing customer", () => {
    cy.editCustomer("Novo Cliente cypress", "Cliente Editado");
  });

  it("should delete an existing customer", () => {
    cy.deleteCustomer("Cliente Editado");
  });
});
