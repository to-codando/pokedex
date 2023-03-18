import { HTMType } from "iares";
import { Tpokemon } from "store/types";

export type TactionSetImage = {
	(imageUrl: string | null): string;
};

export type Tactions = {
	showOverview: () => void;
	setImage: TactionSetImage;
};

export type TactionParams = {
	props: Tprops;
};

export type TcreateActions = {
	(params: TactionParams): Tactions;
};

export type Tprops = { data: Tpokemon };

export type Tparams = { props: Tprops; actions: Tactions };

export type TtemplateReturn =
	| ({ props: Tprops } & HTMType<void, void, Tparams>)
	| HTMType<void, void, Tparams>[];

export type Ttemplate = { (params: Tparams): TtemplateReturn };

export type Tcomponent = {
	template: (params: Tparams) => TtemplateReturn;
	styles: () => string;
	props: Tprops;
};

export type TFactoryParams = {
	props: Tprops;
};

export type TcomponentFactory = {
	(params: TFactoryParams): Tcomponent;
};
