import * as fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { build } from "esbuild";
import aliasPlugin from "esbuild-plugin-path-alias";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isDevMode = process.env.NODE_ENV === "development";

const getTestFiles = (directory, excludeRegex) => {
	const fullPath = path.join(__dirname, directory);
	const files = fs.readdirSync(fullPath);

	return files
		.filter((file) => !excludeRegex.test(file))
		.map((file) => `${directory}${file}`);
};

const runBuild = async () => {
	const testFiles = getTestFiles("./src/tests/", /\.spec\.md$/);
	const components = getTestFiles("./src/components/", /\.spec\.md$/);

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

		supported: {
			"dynamic-import": true,
		},
		platform: "node",
		format: "esm",
		bundle: true,
		write: true,
		watch: true,
		entryPoints: [...testFiles, ...components],
		incremental: true,
		outdir: "./dist/tests",
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
		await build(configBuild);
	} catch (errors) {
		console.log(errors);
		process.exit(0);
	} finally {
		process.exit(0);
	}
};

runBuild();
