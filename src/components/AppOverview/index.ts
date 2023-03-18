import { TcomponentFactory } from "./types";

import { template } from "./template";
import { styles } from "./styles";

export const AppOverview: TcomponentFactory = () => {
	return {
		template,
		styles,
	};
};
