# 26th May 2025

Initial version of Samland-Gov/frontend

- Added "type": "module" to package.json for ES module support.
- Updated package.json to include build and clean scripts, and specified main, types, and style entries.
- Added dependencies and devDependencies for building and styling.
- Created rollup.config.mjs for bundling the library with TypeScript and Sass support.
- Implemented src/index.ts to initialize GOV.UK and prototype components.
- Added markdown.ts for building a customized Markdown parser with GOV.UK styles.
- Created index.scss for styling using GOV.UK Frontend components.
- Added TypeScript declarations for external modules in declarations.d.ts.
- Introduced tsconfig.json for TypeScript configuration.