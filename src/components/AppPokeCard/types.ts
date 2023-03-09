import { HTMType } from "iares";
import { Tpokemon } from "store/types";

export type TactionSetImage = {
	(imageUrl: string | null): string;
};

export type Tactions = {
	showOverview: () => void;
	setImage: TactionSetImage;
};
export type TcreateActions = {
	(): Tactions;
};

export type Tprops = { data: Tpokemon | null };
export type Tparams = { props: Tprops; actions: Tactions };
export type TtemplateReturn =
	| ({ props: Tprops } & HTMType<void, void, Tparams>)
	| HTMType<void, void, Tparams>[];
export type Ttemplate = { (params: Tparams): TtemplateReturn };
