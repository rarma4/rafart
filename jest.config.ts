// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './', // diretório do projeto
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // para lidar com imports de CSS/SCSS e arquivos estáticos
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1', // se você usa caminhos absolutos
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/'],
}

module.exports = createJestConfig(customJestConfig)
