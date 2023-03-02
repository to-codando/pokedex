import { HTMType } from "iares";

export type Tprops = { name: string; placeholder?: string };
export type Tparams = { props: Tprops };
export type TtemplateReturn =
	| ({ props: Tprops } & HTMType<void, void, Tparams>)
	| HTMType<void, void, Tparams>[];
export type Ttemplate = { (params: Tparams): TtemplateReturn };
