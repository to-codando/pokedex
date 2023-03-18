import { TcomponentFactory } from "./types";

import { template } from "./template";
import { styles } from "./styles";

export const AppHeader: TcomponentFactory = () => {
	return {
		template,
		styles,
	};
};
