# Bug repro

## Getting Started
- Ensure you have `yarn@1.22.10` installed
- Run `yarn setup`

## Control Case
- Run `yarn client:start`
- Navigate to http://localhost:3000
- Observe the page loads, and the local development experience is great

## Failure Case
- Run `yarn client:build`
- Observe the build fails, with a similar issue as reported in [Vite Bug #2817](https://github.com/vitejs/vite/issues/2817), on seemingly benign code, with something like the following error:
```
yarn run v1.22.10
$ yarn workspace @repro/client build
$ vite build
Using the following process.env variables {
  APP_NAME: '"client"',
  APP_VERSION: '"1.0.0"',
  BUILD_TIME: '"2021-04-01T19:13:37.746Z"',
  NETFLIX_ENVIRONMENT: '"test"',
  NETFLIX_STACK: '"testintg"',
  SOMETHING_CUSTOM: { CUSTOM_VAR: 'TESTING' }
}
vite v2.1.5 building for production...
✓ 465 modules transformed.
[commonjs] Unexpected token (27:15) in /home/bduran/Documents/dev/opensource/vite-bug-2817-repro/node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js
file: /home/bduran/Documents/dev/opensource/vite-bug-2817-repro/node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js:27:15
25:     }
26:
27:     this.rules.process();
                   ^
28:   }
29:   /**
error during build:
SyntaxError: Unexpected token (27:15) in /home/bduran/Documents/dev/opensource/vite-bug-2817-repro/node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js
    at Object.pp$4.raise (/home/bduran/Documents/dev/opensource/vite-bug-2817-repro/node_modules/rollup/dist/shared/rollup.js:15630:13)
    at Object.pp.unexpected (/home/bduran/Documents/dev/opensource/vite-bug-2817-repro/node_modules/rollup/dist/shared/rollup.js:13322:8)
    at Object.pp$3.parseIdent (/home/bduran/Documents/dev/opensource/vite-bug-2817-repro/node_modules/rollup/dist/shared/rollup.js:15581:10)
    at Object.parseIdent (/home/bduran/Documents/dev/opensource/vite-bug-2817-repro/node_modules/rollup/dist/shared/rollup.js:19648:27)
    at Object.parseIdent (/home/bduran/Documents/dev/opensource/vite-bug-2817-repro/node_modules/rollup/dist/shared/rollup.js:19730:27)
    at Object.pp$3.parseSubscript (/home/bduran/Documents/dev/opensource/vite-bug-2817-repro/node_modules/rollup/dist/shared/rollup.js:14875:62)
    at Object.parseSubscript (/home/bduran/Documents/dev/opensource/vite-bug-2817-repro/node_modules/rollup/dist/shared/rollup.js:19543:37)
    at Object.pp$3.parseSubscripts (/home/bduran/Documents/dev/opensource/vite-bug-2817-repro/node_modules/rollup/dist/shared/rollup.js:14850:24)
    at Object.pp$3.parseExprSubscripts (/home/bduran/Documents/dev/opensource/vite-bug-2817-repro/node_modules/rollup/dist/shared/rollup.js:14835:21)
    at Object.pp$3.parseMaybeUnary (/home/bduran/Documents/dev/opensource/vite-bug-2817-repro/node_modules/rollup/dist/shared/rollup.js:14809:17)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
error Command failed.
Exit code: 1
Command: /home/bduran/.nvm/versions/node/v14.16.0/bin/node
Arguments: /home/bduran/.nvm/versions/node/v14.16.0/lib/node_modules/yarn/lib/cli.js build
Directory: /home/bduran/Documents/dev/opensource/vite-bug-2817-repro/packages/client
Output:

info Visit https://yarnpkg.com/en/docs/cli/workspace for documentation about this command.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
