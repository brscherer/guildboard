import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx', 'src/**/*.spec.ts', 'src/**/*.spec.tsx'],
    // coverage: {
    //   provider: 'v8',
    //   reporter: ['text', 'lcov', 'html'],
    //   all: true,
    //   include: ['src/**/*.{ts,tsx}'],
    //   exclude: ['src/**/*.d.ts', 'src/main.tsx'],
    // },
    // setupFiles: [path.resolve(__dirname, 'src/setupTests.ts')],
  },
  resolve: {
    alias: {
      '@guildboard/contracts': path.resolve(__dirname, '../../packages/contracts/src/index.ts'),
    },
  },
});
