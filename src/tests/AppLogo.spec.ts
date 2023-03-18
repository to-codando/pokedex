import { expect } from "@esm-bundle/chai";
import globalJsdom from "global-jsdom";

import { template } from "@/components/AppLogo/template";
import { styles } from "@/components/AppLogo/styles";
import { AppLogo } from "@/components/AppLogo";

import { Tparams, Tcomponent } from "@/components/AppLogo/types";
import { html, render } from "iares";

describe("AppLogo", () => {
	let cleanup: { (): void };
	let params!: Tparams;
	let component!: Tcomponent;

	before(() => {
		cleanup = globalJsdom();

		params = {
			props: { name: "Pokedex", color: "#fff", handle: () => {} },
		};

		component = AppLogo(params);
	});

	after(() => {
		cleanup();
	});

	it("Should component have the necessary properties", () => {
		expect(component).is.a("object");
		expect(component).to.have.all.keys(["template", "styles", "props"]);
		expect(component.styles).is.a("function");
		expect(component.styles()).is.a("string");
		expect(component.template).is.a("function");
		expect(component.template(params)).to.have.all.keys([
			"type",
			"children",
			"props",
		]);
	});
});
