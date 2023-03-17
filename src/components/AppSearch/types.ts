import { HTMType, TState } from "iares";
import { TglobalStore } from "store/types";

export type Tactions = {
	setTerm: (event: Event) => void;
	setFocus: () => void;
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

export type TactionFactory = {
	(params?: TState<TglobalStore>): Tactions;
};

export type TsearchStore = {
	value: string;
};

export type ThooksParams = {
	actions: Tactions;
	store: TState<TsearchSTore>;
};

export type Thooks = {
	beforeMount: () => void;
	afterRender: () => void;
};

export type ThooksFactory = {
	(params: ThooksParams): Thooks;
};

export type Tcomponent = {
	template: (params: Tparams) => TtemplateReturn;
	styles: () => string;
	props: Tprops;
	actions: Tactions;
	hooks: Thooks;
	store: TState<TsearchSTore>;
};

export type TcomponentFactory = {
	(params: { props: Tprops }): Tcomponent;
};
