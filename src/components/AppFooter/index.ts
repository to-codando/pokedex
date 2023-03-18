import { TcomponentFactory } from "./types";

import { template } from "./template";
import { styles } from "./styles";

export const AppFooter: TcomponentFactory = () => {
	return {
		template,
		styles,
	};
};
