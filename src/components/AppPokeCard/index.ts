import { TcomponentFactory } from "./types";

import { template } from "./template";
import { styles } from "./styles";

import { createActions } from "./actions";

export const AppPokeCard: TcomponentFactory = ({ props }) => {
	const actions = createActions({ props });

	return {
		template,
		styles,
		props,
		actions,
	};
};
