// Ambient declarations for side-effect CSS imports.
//
// Needed when `noUncheckedSideEffectImports` is on (default in some
// TypeScript versions / editor configs): without this, TS reports
// "Cannot find module ... or its corresponding type declarations" for
// `import "./globals.css"` and the @fontsource CSS imports in
// app/layout.tsx, because those packages don't ship a `types` condition
// for their CSS export paths. This is a type-only shim — it has no
// effect on the actual build output.
declare module "*.css";
declare module "@fontsource/*" {}