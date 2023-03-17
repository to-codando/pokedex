import { ThooksFactory } from "./types";
import { store as globalStore } from "@/store";

export const createHooks: ThooksFactory = ({ actions, store: localStore }) => {
	const beforeMount = () => {
		globalStore.watchState(({ search }) => {
			const value = search ? search : "";
			localStore.setState({ ...localStore.state, value });
		});
	};

	const afterRender = () => {
		actions.setFocus();
	};

	return { beforeMount, afterRender };
};
