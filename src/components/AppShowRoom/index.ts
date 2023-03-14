import { createState } from "iares";

import { template } from "./template";
import { styles } from "./styles";

import { TcomponentFactory } from "./types";
import { createHooks } from "./hooks";

import { actions, TpokemonState } from "@/store";

export const AppShowRoom: TcomponentFactory = () => {
	const store = createState<TpokemonState>({ pokemons: [] });
	const hooks = createHooks(store, actions);

	return {
		store,
		template,
		styles,
		hooks,
	};
};
