import * as fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { build, context } from "esbuild";
import aliasPlugin from "esbuild-plugin-path-alias";
import Watcher from "watcher";
import { exec } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
	const testFiles = getTestFiles("./tests/", /\.spec\.md$/);
	const components = getTestFiles("./src/components/");

	const configBuild = {
		plugins: [
			aliasPlugin({
				"@/store": path.resolve(__dirname, "./src/store/index"),
				"@/components": path.resolve(__dirname, "./src/components"),
				"@/services": path.resolve(__dirname, "./src/services"),
				"@/utils": path.resolve(__dirname, "./src/utils"),
				"@/assets": path.resolve(__dirname, "./src/assets"),
			}),
		],
		platform: "node",
		format: "esm",
		bundle: true,
		write: true,
		entryPoints: [...testFiles, ...components],
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

	let watcher = new Watcher(["./src/**/*.ts", "./tests"]);

	const ctx = await context(configBuild);
	ctx.rebuild();

	watcher.on("change", async (data) => {
		ctx.rebuild();
		onSigintStop(ctx, watcher);
	});

	const onSigintStop = (ctx, watcher) => {
		process.on("SIGINT", () => {
			console.log("SIGINT received, shutting down...");
			ctx.dispose();
			watcher.close();
			process.exit(0);
		});
	};
};

exec("node runBuild()");
// runBuild();
