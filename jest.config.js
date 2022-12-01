module.exports = {
  preset: 'ts-jest',
  testTimeout: 20000,
  testEnvironment: 'jest-environment-jsdom',
  verbose: false,
  roots: ['./'],
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  coveragePathIgnorePatterns: ['/stories/', '/e2e-tests/', '/.next/', '/.storybook/', '/coverage/'],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.ts',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    // '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/__mocks__/fileMock.js`,
    '^.+\\.(jpg|jpeg|png|gif|webp|avif)$': `<rootDir>/__mocks__/next/image.tsx`,
    '\\.svg$': '<rootDir>/__mocks__/svg.ts',
    '\\.(svg+[?]+icon)$': '<rootDir>/__mocks__/svg.tsx',
    // Handle module aliases
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/e2e-tests/'],
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '<rootDir>/jest.env.js'],
  resolver: '<rootDir>/jest-resolver.js',
};
