const { getJestAliasPaths } = require('./paths.config')

module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
  ],
  setupFilesAfterEnv: [
    './jest.setup.js',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': "<rootDir>/__mocks__/fileMock.js",
    ...getJestAliasPaths(),
  },
}
