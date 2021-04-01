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
- Observe the build fails, with a similar issue as reported in [Vite Bug #2817](https://github.com/vitejs/vite/issues/2817), on seemingly benign code
