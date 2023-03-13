import { TState } from "iares";

export type TpokemonTypes = string[];

export type TpokemonSprites = {
	normal: string;
	large: string;
	animated: string;
};

export type Tpokemon = {
	national_number: string;
	evolution: boolean | null;
	sprites: TpokemonSprites;
	name: string;
	type: string[];
	total: number;
	hp: number;
	attack: number;
	defense: number;
	sp_atk: number;
	sp_def: number;
	speed: number;
};

export type TpokemonState = {
	pokemons: Tpokemon[];
};

export type TgetData = {
	(): Promise<TpokemonState>;
};

export type TsetStorage = {
	(store: TpokemonState): void;
};

export type TgetPokemons = {
	(startingPosition: number, endPosition: number): Promise<TpokemonState>;
};

export type Tactions = {
	getData: TgetData;
	setStorage: TsetStorage;
	getPokemons: TgetPokemons;
};

export type Tstore = {
	state: TpokemonState;
	actions: Tactions;
};
