import { esbuildPlugin } from "@web/dev-server-esbuild";

export default {
  plugins: [esbuildPlugin({ ts: true })],
  concurrency: 10,
  nodeResolve: true,
  watch: true,
  files: [
    "./src/**/*.spec.ts", // include `.spec.ts` files
    "!**/*.e2e.spec.ts", // exclude `.e2e.spec.ts` files
    "!**/node_modules/**/*", // exclude any node modules// exclude any node modules
    "!**/iares/**/*", // exclude any node modules// exclude any node modules
  ],
  coverageConfig: {
    include: ["./src/**/*.ts"],
  },
  // in a monorepo you need to set set the root dir to resolve modules
  rootDir: "../",
};
