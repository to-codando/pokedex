import { ThookCreator } from "./types";

export const createHooks: ThookCreator = (store, actions) => {
	const beforeMount = async () => {
		const { pokemons } = await actions.getPokemons(0, 59);
		store.setState({ ...store.state, pokemons });
	};

	return { beforeMount };
};
