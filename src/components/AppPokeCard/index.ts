import { Tparams, TtemplateReturn } from "./types.js";
import { Tprops } from "./types";

import { template } from "./template";
import { styles } from "./styles";

import { createActions } from "./actions";

export type Tcomponent = {
	(params: Tparams): {
		template: (params: Tparams) => TtemplateReturn;
		styles: () => string;
		props: Tprops;
	};
};

export const AppPokeCard: Tcomponent = ({ props }) => {
	const actions = createActions();

	return {
		template,
		styles,
		props,
		actions,
	};
};
