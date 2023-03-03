import { Tparams, TstateOption, TtemplateReturn } from "./types.js";
import { Tprops } from "./types.js";

import { template } from "./template.js";
import { styles } from "./styles.js";
import { createState } from "../../../../iares/src/state/index";

export type Tcomponent = {
	(params: Tparams): {
		template: (params: Tparams) => TtemplateReturn;
		styles: () => string;
		props: Tprops;
	};
};

export const AppToggle: Tcomponent = ({ props }) => {
	const state = createState<TstateOption>({
		selectedOption: 1,
	});
	return {
		template,
		styles,
		props,
	};
};
