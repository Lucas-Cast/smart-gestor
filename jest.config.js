module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/','<rootDir>/src/hooks/use-mobile.tsx','<rootDir>/src/components/ui/*.tsx'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/**', // should be tested in e2e
    '!src/lib/registry.tsx',
    '!src/types/**',
    '!src/**/stories.tsx',
    '!src/styles/**',
    '!src/components/ui/*.tsx',
    '!src/hooks/use-mobile.tsx',
    '!src/lib/*.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
      sourceType: 'unambiguous',
      targets: { node: process.versions.node },
      presets: [
        '@babel/preset-env',
        // or runtime: 'classic', depending on which one you are using
        ['@babel/preset-react', { development: true, runtime: 'automatic' }],
        '@babel/preset-typescript'
      ]
    }]
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
