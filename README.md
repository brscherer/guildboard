# Guildboard

Guildboard is a small application that lists and adds new quests to a board for an RPG-like adventurer's guild.

This project is designed as a playground to train and demonstrate skills in:

- **Contract Testing**
- **CSS Testing**
- **Mutation Testing**
- **Chaos Engineering**
- **Integration Tests**
- **Stress Testing**

---

## Project Structure

- `apps/web` — Frontend (React, Vite)
- `apps/api` — Backend (Fastify)
- `libs/contracts` — Shared TypeScript contracts (DTOs)
- `tests/` — End-to-end, stress, and other tests

---

## Topics & Tooling

### 1. Contract Testing

**Tool:** [Pact](https://docs.pact.io/)

- **Purpose:** Ensures the API contract between frontend and backend is respected.
- **Location:** See [`apps/web/src/features/quests/quests.pact.test.ts`](apps/web/src/features/quests/quests.pact.test.ts) and [`apps/api/scripts/verify-pact.ts`](apps/api/scripts/verify-pact.ts).
- **How to extend:**  
  - Add new interactions in the consumer test ([`quests.pact.test.ts`](apps/web/src/features/quests/quests.pact.test.ts)).
  - Update provider verification scripts as new endpoints are added.

### 2. CSS Testing

**Tool:** [Cypress](https://www.cypress.io/)

- **Purpose:** End-to-end UI tests, including visual/CSS assertions.
- **Location:** See [`tests/cypress/e2e/quests.cy.ts`](tests/cypress/e2e/quests.cy.ts).
- **How to extend:**  
  - Add new Cypress tests for UI components and styles.
  - Use Cypress commands to assert on CSS classes, computed styles, and visual states.

### 3. Mutation Testing

**Tool:** [Stryker](https://stryker-mutator.io/)

- **Purpose:** Measures the effectiveness of your tests by introducing code mutations.
- **Location:** Configured in [`stryker.conf.js`](stryker.conf.js).
- **How to extend:**  
  - Write more unit/integration tests to increase mutation coverage.
  - Run `pnpm stryker` to see mutation score and improve weak spots.

### 4. Chaos Engineering

**Tool:** Manual/Scripted Fault Injection

- **Purpose:** Test system resilience by introducing failures (e.g., network errors, random crashes).
- **How to extend:**  
  - Add scripts or test cases that simulate backend failures, slow responses, or dropped connections.
  - Use Cypress or custom scripts to automate chaos scenarios.

### 5. Integration Tests

**Tool:** [Vitest](https://vitest.dev/)

- **Purpose:** Test integration between modules (e.g., service and repo, API and DB).
- **Location:** See [`apps/api/src/features/quests/__tests__/service.test.ts`](apps/api/src/features/quests/__tests__/service.test.ts).
- **How to extend:**  
  - Add more tests covering new features and edge cases.
  - Use mocks or in-memory stores for isolated integration.

### 6. Stress Testing

**Tool:** [k6](https://k6.io/)

- **Purpose:** Simulate high load to test system performance and stability.
- **Location:** See [`tests/stress/load.js`](tests/stress/load.js).
- **How to extend:**  
  - Write new k6 scripts for different endpoints or scenarios.
  - Adjust VUs (virtual users) and duration to match your stress goals.

---

## Getting Started

1. **Install dependencies:**  
   ```sh
   pnpm install
   ```

2. **Run the app:**  
   ```sh
   pnpm dev
   ```

3. **Run tests:**  
   - Contract: See Pact scripts in [`apps/web`](apps/web/src/features/quests/quests.pact.test.ts) and [`apps/api`](apps/api/scripts/verify-pact.ts).
   - CSS/E2E:  
     ```sh
     pnpm cy:open
     ```
   - Mutation:  
     ```sh
     pnpm stryker
     ```
   - Integration:  
     ```sh
     pnpm test
     ```
   - Stress:  
     ```sh
     k6 run tests/stress/load.js
     ```

---

## Contributing

- Add new quests, endpoints, or features.
- Write tests for new code.
- Improve test coverage and mutation score.
- Experiment with chaos and stress scenarios.

---

Happy hacking!