import { expect } from "@esm-bundle/chai";

import { AppSample } from "./";
import { template } from "./template";
import { styles } from "./styles";

describe("AppSample", () => {
	const props = { name: "favorite", color: "#666" };
	const component = AppSample({ props });
});
