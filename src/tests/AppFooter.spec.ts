import { expect } from "@esm-bundle/chai";
import globalJsdom from "global-jsdom";

import { AppFooter } from "@/components/AppFooter";

import { Tcomponent } from "@/components/AppFooter/types";

describe("AppFooter", () => {
	let cleanup: { (): void };
	let component!: Tcomponent;

	before(() => {
		cleanup = globalJsdom();
		component = AppFooter();
	});

	after(() => {
		cleanup();
	});

	it("Should component have the necessary properties", () => {
		expect(component).is.a("object");
		expect(component).to.have.all.keys(["template", "styles"]);
		expect(component.styles).is.a("function");
		expect(component.styles()).is.a("string");
		expect(component.template).is.a("function");
		expect(component.template()).to.have.all.keys([
			"type",
			"children",
			"props",
		]);
	});
});
