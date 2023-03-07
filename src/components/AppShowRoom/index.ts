import { createState, TState } from "iares";

import { Tparams, TtemplateReturn, Thooks } from "./types";
import { Tprops } from "./types.js";

import { template } from "./template.js";
import { styles } from "./styles.js";

import { actions, TpokemonState } from "@/store";

export type Tcomponent = {
	(params: Tparams): {
		template: (params: Tparams) => TtemplateReturn;
		styles: () => string;
		props: Tprops;
		hooks: Thooks;
		store: TState<TpokemonState>;
	};
};

export const AppShowRoom: Tcomponent = ({ props }) => {
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
		props,
		hooks: { beforeMount },
	};
};
