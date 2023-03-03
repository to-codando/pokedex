import { HTMType } from "iares";

export type TstateOption = {
	selectedOption: number | boolean;
};

export type Toption = { label: string; value: number | boolean };

export type TappOptionParams = {
	props: Toption;
};

export type TappOptionReturn =
	| HTMType<void, void, TappOptionParams>
	| HTMType<void, void, TappOptionParams>[];

export type TappOption = {
	(params: TappOptionParams): TappOptionReturn;
};

export type Tprops = { options: Toption[] };
export type Tparams = { props: Tprops; state: TstateOption };
export type TtemplateReturn =
	| ({ props: Tprops } & HTMType<void, void, Tparams>)
	| HTMType<void, void, Tparams>[];
export type Ttemplate = { (params: Tparams): TtemplateReturn };
