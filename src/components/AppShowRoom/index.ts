import { createState, TState } from "iares";

import { Tcomponent } from "./types";

import { template } from "./template";
import { styles } from "./styles";

import { actions, TpokemonState } from "@/store";

export const AppShowRoom: Tcomponent = () => {
	const localStore = createState<TpokemonState>({ pokemons: [] });

	const beforeMount = async () => {
		const { pokemons } = await actions.getPokemons(0, 59);
		const state = localStore.state;
		localStore.setState({ ...state, pokemons });
	};

	return {
		store: localStore,
		template,
		styles,
		hooks: { beforeMount },
	};
};
