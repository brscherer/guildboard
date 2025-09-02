module.exports = {
  mutator: 'typescript',
  packageManager: 'pnpm',
  reporters: ['clear-text', 'html'],
  testRunner: 'vitest',
  tsconfigFile: 'tsconfig.base.json',
  mutate: [
    'apps/api/src/**/*.ts',
    'apps/web/src/**/*.ts',
    'libs/contracts/src/**/*.ts'
  ]
};
