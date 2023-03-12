import path, { dirname } from "path";
import { fileURLToPath } from "url";
import Watcher from "watcher";
import * as fs from "fs";

import { context } from "esbuild";
import copy from "esbuild-copy-files-plugin";
import aliasPlugin from "esbuild-plugin-path-alias";
import { buildEnvironment } from "./build.environment.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3000;
const isDevMode = process.env.NODE_ENV === "development";

const getTestFiles = (directory, excludeRegex) => {
	const fullPath = path.join(__dirname, directory);
	const files = fs.readdirSync(fullPath);

	if (!excludeRegex) return files.map((file) => `${directory}${file}`);

	return files
		.filter((file) => !excludeRegex.test(file))
		.map((file) => `${directory}${file}`);
};

const runBuild = async () => {
	const testFiles = getTestFiles("./src/tests/", /\.spec\.md$/);
	const components = getTestFiles("./src/components/");

	const configBuild = {
		plugins: [
			buildEnvironment({ environment: "development" }),
			aliasPlugin({
				"@/store": path.resolve(__dirname, "./src/store/index"),
				"@/components": path.resolve(__dirname, "./src/components"),
				"@/services": path.resolve(__dirname, "./src/services"),
				"@/utils": path.resolve(__dirname, "./src/utils"),
				"@/assets": path.resolve(__dirname, "./src/assets"),
			}),
			copy({
				source: ["./src/index.html"],
				target: "./dist",
				copyWithFolder: false, // will copy "images" folder with all files inside
			}),
			copy({
				source: ["./src/assets"],
				target: "./dist",
				copyWithFolder: true, // will copy "images" folder with all files inside
			}),
		],
		supported: {
			"dynamic-import": true,
		},
		platform: "browser",
		format: "esm",
		bundle: true,
		write: true,
		entryPoints: [
			"src/main.ts",
			"src/assets/styles/main.css",
			...testFiles,
			...components,
		],
		tsconfig: "./tsconfig.spec.json",
		outdir: "./dist",
		treeShaking: false,
		sourcemap: true,
		minify: false,
		target: isDevMode ? ["esnext"] : ["es2018"],
		loader: {
			".png": "dataurl",
			".jpg": "file",
			".jpeg": "file",
			".svg": "text",
		},
	};

	try {
		const ctx = await context(configBuild);

		const { port } = await ctx.serve({
			port: 8080,
			servedir: "./dist",
		});

		ctx.watch();
		console.log(`server running in localhost:${port}`);
	} catch (errors) {
		console.log(errors);
		process.exit(0);
	}

	// let watcher = new Watcher(["./src/**/*.ts", "./tests"]);

	// watcher.on("change", async (data) => {
	// 	ctx.rebuild();
	// 	onSigintStop(ctx, watcher);
	// });

	// const onSigintStop = (ctx, watcher) => {
	// 	process.on("SIGINT", () => {
	// 		console.log("SIGINT received, shutting down...");
	// 		ctx.dispose();
	// 		watcher.close();
	// 		process.exit(0);
	// 	});
	// };
	// console.log("ok");
};

runBuild();
