import { HTMType } from "iares";

export type Tactions = {
	showOverview: () => void;
};
export type TcreateActions = {
	(): Tactions;
};

export type Tprops = { image: string };
export type Tparams = { props: Tprops; actions: Tactions };
export type TtemplateReturn =
	| ({ props: Tprops } & HTMType<void, void, Tparams>)
	| HTMType<void, void, Tparams>[];
export type Ttemplate = { (params: Tparams): TtemplateReturn };
