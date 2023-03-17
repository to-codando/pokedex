import { expect } from "@esm-bundle/chai";

import { default as globalJsdom } from "global-jsdom";

import { Tcomponent } from "@/components/AppSearch/types";
import { AppSearch } from "@/components/AppSearch";
import { createHooks } from "@/components/AppSearch/hooks";
import { createActions } from "@/components/AppSearch/actions";
import { template } from "@/components/AppSearch/template";
import { styles } from "@/components/AppSearch/styles";

import { store, actions } from "@/store";

describe("AppSearch", () => {
	let cleanup: globalJsdom;
	let component!: Tcomponent;

	before(() => {
		cleanup = globalJsdom();
	});

	after(() => {
		cleanup();
	});

	beforeEach(() => {
		component = AppSearch({
			props: {
				name: "search",
				placeholder: "Pesquise pornome ou id",
			},
		});
	});

	it("Should create component", () => {
		expect(component).to.have.all.keys([
			"template",
			"styles",
			"actions",
			"hooks",
			"store",
			"props",
		]);
	});

	it("Should create the component actions", () => {
		expect(component.actions).to.have.all.keys(["setTerm", "setFocus"]);
		expect(component.actions).to.have.all.keys(createActions());
		expect(component.actions.setFocus).to.be.a("function");
		expect(component.actions.setTerm).to.be.a("function");
	});

	it("Should create the component hooks", () => {
		const store = component.store;
		const actions = createActions();
		expect(component.hooks).to.have.all.keys(["afterRender", "beforeMount"]);
		expect(component.hooks).to.have.all.keys(createHooks({ actions, store }));
		expect(component.hooks.afterRender).to.be.a("function");
		expect(component.hooks.beforeMount).to.be.a("function");
	});

	it("Should create the component template", () => {
		const { props, actions, store } = component;
		const templateView = template({ props, state: store.state, actions });
		expect(template).to.be.a("function");
		expect(templateView).to.be.a("object");
		expect(templateView).to.have.all.keys(["type", "children", "props"]);
	});

	it("Should create the component styles", () => {
		expect(styles).to.be.a("function");
		expect(styles()).to.be.a("string");
	});
});
