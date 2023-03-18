import { HTMType } from "iares";

export type TtemplateReturn =
	| HTMType<void, void, void>
	| HTMType<void, void, void>;

export type Ttemplate = { (): TtemplateReturn };

export type Tcomponent = {
	template: () => TtemplateReturn;
	styles: () => string;
};

export type TcomponentFactory = {
	(): Tcomponent;
};
