import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'tests/cypress/e2e/**/*.cy.ts',
    supportFile: 'tests/cypress/support/commands.ts',
    baseUrl: 'http://localhost:5173', // frontend dev server
  },
  video: false
})
