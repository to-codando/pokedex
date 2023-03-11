export default {
	concurrency: 10,
	nodeResolve: true,
	watch: true,

	write: true,
	entryPoints: ["./dist/*.spec.js", "./dist/components/**/*.js"],
	incremental: true,


	files: [
		"./dist/**/*.spec.js", // include `.spec.ts` files
		"!**/*.e2e.spec.js", // exclude `.e2e.spec.ts` files
		"!**/node_modules/**/*", // exclude any node modules
	],

	coverageConfig: {
		report: true,
		reportDir: "coverage",
		threshold: {
			statements: 80,
			branches: 80,
			functions: 80,
			lines: 80,
		},
	},
};