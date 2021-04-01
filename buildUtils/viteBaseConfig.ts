import path from 'path';
import fs from 'fs';

import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig, UserConfig, UserConfigExport } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

type Env = Record<string, string | number | SubEnv>;
// Hack to allow circular typings
interface SubEnv extends Env {}

interface ExtendViteBaseConfigOptions {
  additionalEnvVars?: Env;
  configOverrides?: UserConfig;
}

export function extendViteBaseConfig({
  additionalEnvVars = {},
  configOverrides = {},
}: ExtendViteBaseConfigOptions = {}): UserConfigExport {
  const netflixEnv = process.env.NETFLIX_ENVIRONMENT || 'test';
  const netflixStack = process.env.NETFLIX_STACK || 'testintg';

  const { name, version } = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'));
  const now = new Date().toISOString();
  const appName = name.split('/')[1] || name;

  const env: Env = {
    APP_NAME: `"${appName}"`,
    APP_VERSION: `"${version}"`,
    BUILD_TIME: `"${now}"`,
    NETFLIX_ENVIRONMENT: `"${netflixEnv}"`,
    NETFLIX_STACK: `"${netflixStack}"`,
    // Allow an app to override any of these incoming values
    ...additionalEnvVars,
  };
  console.info('Using the following process.env variables', env);
  return defineConfig({
    ...configOverrides,
    build: {
      ...configOverrides.build,
      outDir: path.join(process.cwd(), 'build'),
      sourcemap: true,
    },
    define: {
      ...configOverrides.define,
      process: {
        env,
      },
    },
    plugins: [reactRefresh(), tsconfigPaths({ root: process.cwd() }), svgr(), ...(configOverrides.plugins || [])],
    resolve: {
      ...configOverrides.resolve,
      // Copy over the defaults from Vite's documentation, but also allow regular main files as a fallback
      mainFields: ['module', 'jsnext:main', 'jsnext', 'main'],
    },
    root: process.cwd(),
  });
}
