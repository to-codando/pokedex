import * as sinon from "sinon";

export const mockActions = () => {
	const getPokemons = sinon.stub();
	const setStorage = sinon.stub();
	const getData = sinon.stub();
	return { getData, getPokemons, setStorage };
};

export const mockHooks = () => {
	return { beforeMount: sinon.stub().resolves() };
};
