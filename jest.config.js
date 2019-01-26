module.exports = {
  setupFilesAfterEnv: ['<rootDir>tests/setupUnitTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
};
