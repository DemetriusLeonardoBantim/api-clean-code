export default {
  roots: ['<rootDir>/src'],
  collectCoverage: ['<hootDir>/src/**/*ts'],
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
