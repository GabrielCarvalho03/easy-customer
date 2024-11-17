// Comando para acessar a página start e digitar o nome
Cypress.Commands.add("accessStartPageAndEnterName", (name: string) => {
  cy.visit("http://localhost:3000/");
  cy.get('input[placeholder="Digite seu nome"]', { timeout: 10000 })
    .should("be.visible")
    .type("Gabriel");
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add(
  "createCustomer",
  (name: string, salary: number, companyValuation: number) => {
    // Intercepta a requisição para garantir que ela seja concluída antes de continuar
    cy.intercept("GET", "/users?_page=1&_limit=16").as("getUsers");

    // Navega para a URL correta
    cy.visit("http://localhost:3000/home/Gabriel/clientes");

    // Espera até que o botão "Criar cliente" esteja visível e não desabilitado
    cy.get("button", { timeout: 10000 })
      .contains("Criar cliente")
      .should("be.visible")
      .and("not.be.disabled")
      .click();

    // Espera até que os campos de entrada estejam visíveis
    cy.get('input[placeholder="Digite o nome:"]', { timeout: 10000 })
      .should("be.visible")
      .type(name);
    cy.get('input[placeholder="Digite o salário:"]', { timeout: 10000 })
      .should("be.visible")
      .type(salary.toString());
    cy.get('input[placeholder="Digite o valor da empresa:"]', {
      timeout: 10000,
    })
      .should("be.visible")
      .type(companyValuation.toString());

    // Espera até que o botão "Criar cliente" esteja visível e não desabilitado antes de clicar
    cy.get('button[type="submit"]', { timeout: 20000 })
      .contains("Criar cliente")
      .should("be.visible")
      .and("not.be.disabled")
      .click();

    // Espera até que a requisição para obter os usuários seja concluída
    cy.wait("@getUsers");

    // Verifica se o novo cliente foi criado com sucesso
    cy.contains(name, { timeout: 10000 }).should("exist");
  }
);

// Comando para editar um cliente existente
Cypress.Commands.add("editCustomer", (oldName: string, newName: string) => {
  cy.visit("http://localhost:3000/home/Gabriel/clientes");

  // Espera até que o ícone de edição esteja visível
  cy.contains(oldName)
    .parent()
    .find('[data-testid="edit-icon"]')
    .should("be.visible")
    .click();

  // Espera até que o campo de entrada esteja visível
  cy.get('input[placeholder="Digite o nome:"]')
    .should("be.visible")
    .clear()
    .type(newName);

  // Espera até que o botão "Salvar alterações" esteja visível e não desabilitado antes de clicar

  cy.get('button[type="submit"]')
    .contains("Salvar alterações")
    .should("be.visible")
    .and("not.be.disabled")
    .click();
});

// Comando para excluir um cliente existente
Cypress.Commands.add("deleteCustomer", (name: string) => {
  cy.visit("http://localhost:3000/home/Gabriel/clientes");
  cy.contains(name).parent().find('[data-testid="trash-icon"]').click();
  cy.get("button").contains("Excluir").click();
  cy.contains(name).should("not.exist");
});
