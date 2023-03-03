import { createState } from "iares";

import { Tparams, TtemplateReturn } from "./types.js";
import { Tprops } from "./types.js";

import { template } from "./template.js";
import { styles } from "./styles.js";

export type Tcomponent = {
	(params: Tparams): {
		template: (params: Tparams) => TtemplateReturn;
		styles: () => string;
		props: Tprops;
	};
};

export const AppShowRoom: Tcomponent = ({ props }) => {
	const state = createState({
		orderTypes: [
			{ label: "Numérica", type: 1 },
			{ label: "Alfabética", type: 2 },
		],
		orderDirection: [
			{ label: "Crescente", type: 1 },
			{ label: "Decrescente", type: 2 },
		],
		pinFavorite: false,
	});
	return {
		template,
		styles,
		props,
	};
};
