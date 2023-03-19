import { TcomponentFactory } from "./types";

import { template } from "./template";
import { styles } from "./styles";

import { createActions } from "./actions";
import { createHooks } from "./hooks";
import { createState } from "iares";
import { Tpokemon } from "store/types";

export const AppOverview: TcomponentFactory = () => {
	const store = createState<Tpokemon>({});
	const actions = createActions({ store });
	const hooks = createHooks({ actions });

	return {
		template,
		styles,
		hooks,
		store,
		actions,
	};
};
