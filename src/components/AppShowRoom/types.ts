import { HTMType } from "iares";
import { TpokemonState } from "store/types";

export type Tprops = { name: string; color?: string; handle?: () => void };
export type Tparams = { props: Tprops; state: TpokemonState };
export type TtemplateReturn =
	| ({ props: Tprops } & HTMType<void, void, Tparams>)
	| HTMType<void, void, Tparams>[];
export type Ttemplate = { (params: Tparams): TtemplateReturn };

export type Thook = {
	(): void;
};
export type Thooks = {
	beforeMount: Thook;
};
