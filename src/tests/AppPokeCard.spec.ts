import { expect } from "@esm-bundle/chai";
import globalJsdom from "global-jsdom";

import { template } from "@/components/AppPokeCard/template";
import { styles } from "@/components/AppPokeCard/styles";
import { AppPokeCard } from "@/components/AppPokeCard";

import {
	Tprops,
	Tparams,
	Tcomponent,
	Tactions,
} from "@/components/AppPokeCard/types";

import { html, render } from "iares";
import { createActions } from "@/components/AppPokeCard/actions";
import { filledPokemonState } from "../mock/AppShowRoom/pockemons";

describe("AppPokeCard", () => {
	let cleanup: { (): void };
	let props!: Tprops;
	let params!: Tparams;
	let component!: Tcomponent;
	let actions!: Tactions;

	before(() => {
		cleanup = globalJsdom();
		props = { data: filledPokemonState.pokemons[0] };
		actions = createActions({ props });
		params = { actions, props };
		component = AppPokeCard(params);
	});

	after(() => {
		cleanup();
	});

	it("Should component have the necessary properties", () => {
		expect(component).is.a("object");
		expect(component).to.have.all.keys([
			"template",
			"styles",
			"props",
			"actions",
		]);
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
