import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', { sourceMaps: 'inline' }],
  },
  moduleNameMapper: {
    '^hyperbee-package-test$': '<rootDir>/src/index.ts',
    '^hyperbee-package-test/_shims/auto/(.*)$': '<rootDir>/src/_shims/auto/$1-node',
    '^hyperbee-package-test/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/ecosystem-tests/',
    '<rootDir>/dist/',
    '<rootDir>/deno/',
    '<rootDir>/deno_tests/',
  ],
  testPathIgnorePatterns: ['scripts'],
  prettierPath: require.resolve('prettier-2'),
};

export default config;
