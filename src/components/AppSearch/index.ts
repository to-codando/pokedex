import { Tparams, TtemplateReturn } from "./types.js";
import { Tprops } from "./types";

import { template } from "./template";
import { styles } from "./styles";
import { createState } from "iares";

export type Tcomponent = {
	(params: Tparams): {
		template: (params: Tparams) => TtemplateReturn;
		styles: () => string;
		props: Tprops;
	};
};

export const AppSearch: Tcomponent = ({ props }) => {
	const store = createState({ value: "Texto do campo de busca" });
	return {
		template,
		styles,
		props,
		store,
	};
};
