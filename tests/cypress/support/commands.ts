/// <reference types="cypress" />

Cypress.Commands.add("login", (username: string, password: string) => {
  cy.request({
    method: "POST",
    url: "/api/auth/login",
    body: { username, password },
  }).then((resp) => {
    window.localStorage.setItem("authToken", resp.body.token);
  });
});

Cypress.Commands.add("resetBackend", () => {
  cy.request("POST", "/api/test/reset");
});

Cypress.Commands.add("createQuest", (quest: { title: string; difficulty: string; reward: string }) => {
  cy.request("POST", "/api/quests", quest);
});
