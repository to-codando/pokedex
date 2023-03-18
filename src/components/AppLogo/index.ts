import { TcomponentFactory } from "./types";

import { template } from "./template";
import { styles } from "./styles";

export const AppLogo: TcomponentFactory = ({ props }) => {
	return {
		template,
		styles,
		props,
	};
};
