import {
	TactionFactory,
	TactionGetPokemonById,
	TcalculateSkillPower,
	TcalculateTotalPower,
} from "./types";

import { store, actions, Tpokemon } from "@/store";

import { EMaxPower } from "./types";

export const createActions: TactionFactory = ({ store }) => {
	const getPokemonId = () => {
		const hash = window.location.hash;
		const pokemonId = hash ? hash.split("/").pop() : "";
		if (!pokemonId) throw new Error("Pokemon id not found and must be.");
		return pokemonId;
	};

	const getPokemonById: TactionGetPokemonById = async (id) =>
		await actions.getPokemonById(id);

	const setPokemon = (pokemon: Tpokemon) => {
		store.setState({ ...store.state, ...pokemon });
	};

	const calculateSkillPower: TcalculateSkillPower = (value) => {
		const maxPercentual = 100;
		const maxValue = 200;
		return (value / maxValue) * maxPercentual;
	};

	const calculateTotalPower: TcalculateTotalPower = (value) => {
		const maxPercentual = 100;
		const maxValue = 1200;
		return (value / maxValue) * maxPercentual;
	};

	return {
		getPokemonId,
		getPokemonById,
		setPokemon,
		calculateSkillPower,
		calculateTotalPower,
	};
};
