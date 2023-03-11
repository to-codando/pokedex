import { HTMType } from "iares";

type TsearchSTore = {
	value: string;
};

export type Tprops = { name: string; placeholder?: string };
export type Tparams = { props: Tprops; state: TsearchSTore };
export type TtemplateReturn =
	| ({ props: Tprops } & HTMType<void, void, Tparams>)
	| HTMType<void, void, Tparams>[];
export type Ttemplate = { (params: Tparams): TtemplateReturn };
