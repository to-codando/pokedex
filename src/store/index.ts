export {
	TpokemonTypes,
	TpokemonState,
	TpokemonSprites,
	Tpokemon,
	Tactions,
} from "./types";

import { createState, TState } from "iares";
import { createActions } from "./actions";
import { TpokemonState } from "./types";

const data: TpokemonState = {
	pokemons: [],
};

const store = createState<TpokemonState>(data);
const actions = createActions(store);

export { store, actions };
