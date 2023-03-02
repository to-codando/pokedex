import { expect } from "@esm-bundle/chai";

import { AppHeader } from "./";
import { template } from "./template";
import { styles } from "./styles";

describe("AppHeader", () => {
	const props = { name: "favorite", color: "#666" };
	const component = AppHeader({ props });
});
