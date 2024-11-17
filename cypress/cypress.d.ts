declare namespace Cypress {
  interface Chainable {
    accessStartPageAndEnterName(name: string): Chainable;
    createCustomer(name: string, balance: number, limit: number): Chainable;
    editCustomer(oldName: string, newName: string): Chainable;
    deleteCustomer(name: string): Chainable;
  }
}
