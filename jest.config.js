// /** @type {import('ts-jest').JestConfigWithTsJest} */
// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
// };

module.exports={
  roots:['<rootDir>/src'],
  testEnvironment:'node',
  transform:{
    '.+\\.ts$':'ts-jest'
  },
  moduleNameMapper:{
    '@/(.*)':'<rootDir>/src/$1'
  }
}