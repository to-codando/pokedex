import { html, css } from "iares";

const styles = () => css`
  app-main { }
`;

const template = () => html`
  <h1>App main</h1>
`;

export const AppMain = () => {
	return {
		template,
		styles,
	};
};
