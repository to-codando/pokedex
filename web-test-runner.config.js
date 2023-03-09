export default {
	nodeResolve: {
		exportConditions: ["development"],
	},
	port: 8000,
	debug: false,
	concurrency: 10,
	nodeResolve: true,
	watch: true,
	platform: "browser",
	format: "esm",
	bundle: true,
	write: true,
	entryPoints: ["./dist/*.spec.js"],
	incremental: true,
	rootDir: "../",
	outdir: "./dist",
	sourcemap: true,
	target: "esnext",
	loader: {
		".js": "ts",
	},
	files: [
		"./dist/tests/**/*.spec.js", // include `.spec.ts` files
		"!**/*.e2e.spec.ts", // exclude `.e2e.spec.ts` files
		"!**/node_modules/**/*", // exclude any node modules// exclude any node modules
		"!**/iares/**/*", // exclude any node modules// exclude any node modules
	],
	testFramework: {
		config: {
			ui: "db",
			timeout: "2000",
		},
	},
	coverageConfig: {
		report: true,
		reportDir: "coverage",
		threshold: {
			statements: 70,
			branches: 70,
			functions: 70,
			lines: 70,
		},
	},
};
