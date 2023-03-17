import { expect } from "@esm-bundle/chai";

import { default as globalJsdom } from "global-jsdom";

import { AppSearch } from "@/components/AppSearch";
import { template } from "@/components/AppSearch/template";
import { styles } from "@/components/AppSearch/styles";

describe("AppSearch", () => {
	let cleanup: globalJsdom;

	before(() => {
		cleanup = globalJsdom();
	});

	after(() => {
		cleanup();
	});

	it("Should define search value once time when typed in the text field.", () => {
		expect(1).to.be.eql(2);
	});
});
