// los tests no se ejecutan
import type { Config } from '@jest/types';
const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(jpg|jpeg|png|gif|svg)$": "jest-transform-stub",
  },
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    "^.+\\.svg$": "jest-transform-svg",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverage: true, // Habilitar la recopilación de cobertura
  collectCoverageFrom: [
    "src/components/**/*.{ts,tsx}", // Asegúrate de que todos los componentes TSX sean monitoreados
    "src/hooks/**/*.{ts,tsx}",
    "src/utils/**/*.{ts,tsx}",
  ],
  coverageDirectory: "coverage", // Directorio donde se guardará el reporte
  coverageReporters: ["text", "lcov"], // Formatos de reporte, 'lcov' genera un reporte HTML

};
export default config;