import { expect } from "@esm-bundle/chai";
import globalJsdom from "global-jsdom";

import { AppOverview } from "@/components/AppOverview";

import { Tactions, Tcomponent } from "@/components/AppOverview/types";
import { createActions } from "@/components/AppOverview/actions";
import { TState } from "iares/src/state/types";
import { Tpokemon } from "store/types";

describe("AppOverview", () => {
	let cleanup: { (): void };
	let component!: Tcomponent;
	let store!: TState<Tpokemon>;
	let actions!: Tactions;

	before(() => {
		cleanup = globalJsdom();
		component = AppOverview();
		store = component.store;
		actions = createActions({ store });
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
			"actions",
		]);
		expect(component.styles).is.a("function");
		expect(component.styles()).is.a("string");
		expect(component.template).is.a("function");
		expect(
			component.template({ state: store.state, actions }),
		).to.have.all.keys(["type", "children", "props"]);
	});
});
