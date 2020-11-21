module.exports = {
  moduleDirectories: ["./node_modules", "./src"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  cacheDirectory: "<rootDir>/jest_cache",
  collectCoverage: false,
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/**/index.js",
    "!src/**/*.style*.js",
    "!src/**/*.mock.js",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/assets",
    "<rootDir>/src/schemas",
    "<rootDir>/src/testUtils",
    "<rootDir>/src/store",
    "<rootDir>/src/themeHelpers",
    "<rootDir>/src/themes",
    "<rootDir>/src/translations",
    "<rootDir>/src/config",
  ],
  setupFiles: ["./shim.js"],
  setupTestFrameworkScriptFile: "./jest.setup.js",
  moduleNameMapper: {
    "\\.(eot|otf|webp|svg|ttf|woff|woff2|jpg|jpeg|png)$":
      "<rootDir>/fileMock.js",
    theme: "themes/virginbet",
    "^theme/(.*)$": "themes/virginbet/$1",
  },
  transformIgnorePatterns: ["node_modules/(?!(redux-api-middleware)/)"],
};
