export const isEnvironment = (type: string): boolean => {
	return process && process?.env?.NODE_ENV === type;
};
