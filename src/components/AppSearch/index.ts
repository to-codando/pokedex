import { Tparams, TtemplateReturn } from "./types.js";
import { Tprops } from "./types";

import { template } from "./template";
import { styles } from "./styles";
import { createState } from "iares";
import { Tactions } from "./types";

import { store, actions } from "@/store";

export type Tcomponent = {
	(params: Tparams): {
		template: (params: Tparams) => TtemplateReturn;
		styles: () => string;
		props: Tprops;
		actions: Tactions;
	};
};

export const AppSearch: Tcomponent = ({ props }) => {
	const localStore = createState({ value: "" });

	const beforeMount = () => {
		store.watchState(({ search }) => {
			const value = search ? search : "";
			localStore.setState({ ...localStore.state, value });
		});
	};

	const afterRender = () => {
		const element = document.querySelector("app-search");
		const input = element?.querySelector("input");
		const inputLenght = input?.value.length || 0;
		input?.focus();
		input?.setSelectionRange(inputLenght, inputLenght);
	};

	const setTerm = (event: Event) => {
		const target = event.target as HTMLInputElement;
		const value = target.value;
		actions.setState({ search: value });
	};
	return {
		template,
		styles,
		actions: { setTerm },
		hooks: { beforeMount, afterRender },
		props,
		store: localStore,
	};
};
