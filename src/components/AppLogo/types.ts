import { HTMType } from "iares";

export type Tprops = { name: string; color?: string; handle?: () => void };
export type Tparams = { props: Tprops };
export type TtemplateReturn =
	| ({ props: Tprops } & HTMType<void, void, Tparams>)
	| HTMType<void, void, Tparams>[];
export type Ttemplate = { (params: Tparams): TtemplateReturn };

export type Tcomponent = {
	template: (params: Tparams) => TtemplateReturn;
	styles: () => string;
	props: Tprops;
};

export type TcomponentFactory = {
	(params: Tparams): Tcomponent;
};
