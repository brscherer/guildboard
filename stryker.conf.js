const path = require('path');

module.exports = {
  packageManager: 'pnpm',
  reporters: ['clear-text', 'html'],
  testRunner: 'vitest',
  vitest: {
    configFile: path.resolve(__dirname, 'apps/web/vitest.config.mts'),
    related: false
  },
  tsconfigFile: path.resolve(__dirname, 'tsconfig.json'),
  mutate: [
    path.resolve(__dirname, 'apps/web/src/**/*.ts'),
    path.resolve(__dirname, 'apps/web/src/**/*.tsx'),
    path.resolve(__dirname, 'apps/api/src/**/*.ts'),
    path.resolve(__dirname, 'libs/contracts/src/**/*.ts'),
  ],
  thresholds: {
    high: 90,
    low: 80,
    break: 70,
  },
  htmlReporter: {
    fileName: 'mutation-report.html',
  },
  concurrency: 2, // Adjust based on your CPU cores
  plugins: [
    "@stryker-mutator/vitest-runner"
  ]
};
