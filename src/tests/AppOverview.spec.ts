import { expect } from "@esm-bundle/chai";
import globalJsdom from "global-jsdom";

import { AppOverview } from "@/components/AppOverview";

import { Tcomponent } from "@/components/AppOverview/types";
import { TState } from "iares/src/state/types";
import { Tpokemon } from "store/types";

describe("AppOverview", () => {
	let cleanup: { (): void };
	let component!: Tcomponent;
	let store: TState<Tpokemon>;

	before(() => {
		cleanup = globalJsdom();
		component = AppOverview();
		store = component.store;
	});

	after(() => {
		cleanup();
	});

	it("Should component have the necessary properties", () => {
		expect(component).is.a("object");
		expect(component).to.have.all.keys([
			"template",
			"styles",
			"hooks",
			"store",
		]);
		expect(component.styles).is.a("function");
		expect(component.styles()).is.a("string");
		expect(component.template).is.a("function");
		expect(component.template({ state: store.state })).to.have.all.keys([
			"type",
			"children",
			"props",
		]);
	});
});
