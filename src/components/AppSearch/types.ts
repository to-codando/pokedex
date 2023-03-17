import { HTMType } from "iares";

export type Tactions = {
	setTerm: (event: Event) => void;
};
type TsearchSTore = {
	value: string;
};

export type Tprops = { name: string; placeholder?: string };
export type Tparams = { props: Tprops; state: TsearchSTore; actions: Tactions };
export type TtemplateReturn =
	| ({ props: Tprops } & HTMType<void, void, Tparams>)
	| HTMType<void, void, Tparams>[];
export type Ttemplate = { (params: Tparams): TtemplateReturn };
