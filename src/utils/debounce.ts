export type Thandler = {
	(args: any[]): void;
};

export type Tdebounc = {
	(callback: Thandler, delay: number): Thandler;
};

export const debounce: Tdebounc = (callback, delay) => {
	let timer = delay || 500;

	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			callback(args);
		}, delay);
	};
};
