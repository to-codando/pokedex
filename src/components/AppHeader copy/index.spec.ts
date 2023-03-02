import { expect } from "@esm-bundle/chai";

import { AppSample } from "./index.js";
import { template } from "./template.js";
import { styles } from "./styles.js";

describe("AppSample", () => {
	const props = { name: "favorite", color: "#666" };
	const component = AppSample({ props });
});
