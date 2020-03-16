module.exports = {
  testRegex: '((\\.|/*.)(spec | test))\\.js?$',
  clearMocks: true,
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
    'components',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/reactTests/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/reactTests/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: [
    'jest-enzyme',
  ],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '^.+\\.[t|j]s?$': 'babel-jest',
  },
  collectCoverage: true,
};
