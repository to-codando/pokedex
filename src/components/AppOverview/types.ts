import { HTMType, TState } from "iares";
import { TglobalStore, Tstore, Tpokemon } from "store/types";

export type TtemplateReturn =
	| HTMType<void, void, void>
	| HTMType<void, void, void>[];

export type TtemplateParams = {
	state: Tpokemon;
	actions: Tactions;
};

export type Ttemplate = { (param: TtemplateParams): TtemplateReturn };

export type Tcomponent = {
	template: (params: TtemplateParams) => TtemplateReturn;
	styles: () => string;
	hooks: Thooks;
	store: TState<Tpokemon>;
};

export type TcomponentFactory = {
	(): Tcomponent;
};

export type TactionGetPokemonById = {
	(id: string): Promise<Tpokemon | null>;
};
export type TactionSetPokemon = {
	(pokemon: Tpokemon): void;
};

export type TcalculateSkillPower = {
	(value: number): number;
};

export type TcalculateTotalPower = TcalculateSkillPower;

export type Tactions = {
	getPokemonId: { (): string };
	getPokemonById: TactionGetPokemonById;
	setPokemon: TactionSetPokemon;
	calculateSkillPower: TcalculateSkillPower;
	calculateTotalPower: TcalculateTotalPower;
};

export type TactionParams = {
	store: TState<Tpokemon>;
};

export type TactionFactory = {
	(params: TactionParams): Tactions;
};

export type Thooks = {
	beforeMount: { (): void };
};

export type ThookParams = {
	actions: Tactions;
};

export type ThookFactory = {
	(params: ThookParams): Thooks;
};

export enum EMaxPower {
	Total = 1200,
	HP = 200,
	Attack = 200,
	Defense = 200,
	SpecialAttack = 200,
	SpecialDefense = 200,
	Speed = 200,
}
