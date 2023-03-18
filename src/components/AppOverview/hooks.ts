import { ThookFactory } from "./types";

export const createHooks: ThookFactory = ({ actions }) => {
	const beforeMount = async () => {
		const pokemonId = actions.getPokemonId();
		const pokemon = await actions.getPokemonById(pokemonId);
		pokemon && actions.setPokemon(pokemon);
	};

	return { beforeMount };
};
