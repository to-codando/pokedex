import path, { dirname } from "path";
import { fileURLToPath } from "url";

import { build } from "esbuild";

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
		devServer({ public: "./dist", port: PORT }),
		serverRunning(),
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
		watch: true,
		entryPoints: ["src/main.ts", "src/assets/styles/main.css"],
		incremental: true,
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
		await build(configBuild);
	} catch (errors) {
		console.log(errors);
		process.exit(0);
	}
};

runBuild();
