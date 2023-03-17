import { TactionFactory } from "./types";
import { actions } from "@/store";

export const createActions: TactionFactory = () => {
	const setTerm = (event: Event) => {
		const target = event.target as HTMLInputElement;
		const value = target.value;
		actions.setState({ search: value });
	};

	const setFocus = () => {
		const element = document.querySelector("app-search");
		const input = element?.querySelector("input");
		const inputLenght = input?.value.length || 0;
		input?.focus();
		input?.setSelectionRange(inputLenght, inputLenght);
	};

	return { setTerm, setFocus };
};
