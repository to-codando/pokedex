import { TState, HTMType } from "iares";
import { TpokemonState } from "store/types";

export type Tprops = { name: string; color?: string; handle?: () => void };
export type Tparams = { state: TpokemonState };
export type TcomponentReturn =
	| ({ props: Tprops } & HTMType<void, void, Tparams>)
	| HTMType<void, void, Tparams>[];

export type Ttemplate = { (params: Tparams): HTMType | HTMType[] };

export type Thook = {
	(): void;
};
export type Thooks = {
	beforeMount: Thook;
};

export type Tcomponent = {
	(): {
		template: Ttemplate;
		styles: () => string;
		hooks: Thooks;
		store: TState<TpokemonState>;
	};
};
