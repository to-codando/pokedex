import { expect } from "@esm-bundle/chai";

import { AppShowRoom } from "@/components/AppShowRoom";
import { template } from "@/components/AppShowRoom/template";
import { styles } from "@/components/AppShowRoom/styles";
import { store, actions } from "@/store";

import { filledPokemonState } from "@/mock/AppShowRoom/pockemons";

describe("AppShowRoom", async () => {
	const emptyState = { pokemons: [] };

	const params = { state: emptyState };
	const component = AppShowRoom();
	component.template({ state: emptyState });

	it("Should create AppShowRoom component", () => {
		expect(AppShowRoom()).to.be.a("object");

		expect(AppShowRoom())
			.to.be.a("object")
			.and.have.keys(["store", "template", "styles", "hooks"]);
	});

	it("Should create component state", () => {
		expect(component.store)
			.to.be.a("object")
			.and.have.keys(["state", "setState", "watchState"]);
	});

	it("should a blank pokemon list be kept in the state of the component", () => {
		expect(component.store.state)
			.to.be.a("object")
			.and.property("pokemons")
			.to.be.a("array");

		expect(component.store.state.pokemons)
			.to.be.a("array")
			.to.have.deep.members([]);
	});

	it("should a filled pokemon list be kept in the state of the component", () => {
		const component = AppShowRoom();
		component.store.setState(filledPokemonState);
		expect(component.store.state)
			.to.be.a("object")
			.and.property("pokemons")
			.to.be.a("array");

		expect(component.store.state.pokemons)
			.to.be.a("array")
			.to.have.deep.members(filledPokemonState.pokemons);
	});

	it("Should template function return valid template object", () => {
		expect(template({ state: store.state }))
			.to.be.a("object")
			.and.have.all.keys(["type", "props", "children"]);
	});
});
