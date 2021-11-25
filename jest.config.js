module.exports = {
  modulePaths: ['<rootDir>/src', 'node_modules'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
};