import path, { dirname } from "path";
import { fileURLToPath } from "url";

import { context } from "esbuild";
import Watcher from "watcher";

import copy from "esbuild-copy-files-plugin";
import aliasPlugin from "esbuild-plugin-path-alias";
import devServer from "esbuild-plugin-dev-server";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3000;
const isDevMode = process.env.NODE_ENV === "development";

const serverRunning = () => ({
	name: "server",
	async setup(options = {}) {
		console.log(`Server running in http://localhost:${PORT}`);
	},
});

const runBuild = async () => {
	const plugins = [
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
		// devServer({ public: "./dist", port: PORT }),
		// serverRunning(),
	];

	const configBuild = {
		plugins,
		supported: {
			"dynamic-import": true,
		},
		platform: "node",
		format: "esm",
		bundle: true,
		write: true,
		entryPoints: ["src/main.ts", "src/assets/styles/main.css"],
		tsconfig: "./tsconfig.json",
		outdir: "./dist",
		treeShaking: !isDevMode,
		sourcemap: isDevMode,
		minify: !isDevMode,
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
};

runBuild();
