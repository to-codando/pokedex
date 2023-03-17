import { createState } from "iares";
import { TcomponentFactory } from "./types";

import { template } from "./template";
import { styles } from "./styles";
import { createActions } from "./actions";
import { createHooks } from "./hooks";

export const AppSearch: TcomponentFactory = ({ props }) => {
	const store = createState({ value: "" });
	const actions = createActions();
	const hooks = createHooks({ actions, store });

	return {
		template,
		styles,
		actions,
		hooks,
		props,
		store,
	};
};
