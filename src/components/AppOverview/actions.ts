import { TactionFactory, TactionGetPokemonById } from "./types";

import { store, actions, Tpokemon } from "@/store";

export const createActions: TactionFactory = ({ store }) => {
	const getPokemonId = () => {
		const hash = window.location.hash;
		const pokemonId = hash ? hash.split("/").pop() : "";
		if (!pokemonId) throw new Error("Pokemon id not found and must be.");
		return pokemonId;
	};

	const getPokemonById: TactionGetPokemonById = async (id) =>
		await actions.getPokemonById(id);

	const setPokemon = (pokemon: Tpokemon) => {
		store.setState({ ...store.state, ...pokemon });
	};

	return { getPokemonId, getPokemonById, setPokemon };
};
