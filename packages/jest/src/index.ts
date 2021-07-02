import type { Config } from '@jest/types';

export const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: {
        target: 'ES2018',
      },
    },
  },
};

export default config;
