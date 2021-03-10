module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '.'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    "^@fooBar/(.*)": "<rootDir>/src/barFoo/$1",
    "\\.svg": "<rootDir>/components/__mocks__/svgrMock.ts"

  
  },
};