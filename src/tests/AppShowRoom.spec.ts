import globalJsdom from "global-jsdom";
import * as sinon from "sinon";
import { expect, assert } from "@esm-bundle/chai";
import { createState, html, render } from "iares";

import { AppShowRoom } from "@/components/AppShowRoom";
import { template } from "@/components/AppShowRoom/template";
import { styles } from "@/components/AppShowRoom/styles";
import { TcomponentFactory } from "@/components/AppShowRoom/types";
import { createHooks } from "@/components/AppShowRoom/hooks";
import { TpokemonState, actions } from "@/store";
import { filledPokemonState } from "@/mock/AppShowRoom/pockemons";

describe("AppShowRoom component", () => {
	let component: TcomponentFactory;
	let store: ReturnType<typeof createState<TpokemonState>>;
	let hooks: ReturnType<typeof createHooks>;
	let getPokemonsStub: sinon.SinonStub;
	let cleanup: { (): void };

	before(() => {
		cleanup = globalJsdom();
	});

	after(() => {
		cleanup();
	});

	beforeEach(async () => {
		store = createState<TpokemonState>({ pokemons: [] });
		hooks = createHooks(store, actions);
		component = () => AppShowRoom();

		getPokemonsStub = sinon
			.stub(actions, "getPokemons")
			.resolves(filledPokemonState);
	});

	afterEach(async () => {
		getPokemonsStub.restore();
	});

	it("should initialize with an empty array of pokemons", () => {
		expect(store.state.pokemons).to.deep.equal([]);
	});

	it("should update the state with a list of pokemons on mount", async () => {
		hooks.beforeMount();
		await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for the async operation to complete
		expect(getPokemonsStub.calledOnce).to.be.true;
		expect(getPokemonsStub.calledWith()).to.be.true;
		expect(store.state.pokemons).to.deep.equal(filledPokemonState.pokemons);
	});

	it("should return an object with the correct properties", () => {
		const { store, template, styles, hooks } = component();
		expect(component()).to.have.a.property("store");
		expect(component().store).contains.deep.keys(Object.keys(store));
		expect(component()).to.have.a.property("template").that.equals(template);
		expect(component()).to.have.a.property("styles").that.equals(styles);
		expect(component()).to.have.a.property("hooks");
		expect(component().hooks).contains.deep.keys(Object.keys(hooks));
		expect(hooks).to.have.a.property("beforeMount").that.is.a("function");
	});

	it("should return an template object with the correct properties", () => {
		const { store } = component();
		const view = template({ state: store.state });
		expect(view).to.be.a("object");
		expect(view).and.have.all.keys("type", "children", "props");
	});

	it("should render AppPokeCard components", async () => {
		const AppShowRoom = () => ({
			...component(),
			template: () => template({ state: filledPokemonState }),
		});
		console.log("document", document.body);

		render(html`<${AppShowRoom} />`, document.body);

		const AppPokeCardElements = Array.from(
			document.body.querySelectorAll("app-poke-card"),
		);
		expect(AppPokeCardElements).to.have.lengthOf(1);
	});
});
