import { html, css } from "iares";

const styles = () => css`
  app-main {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap:wrap;
    width:100%;
    height: 100vh;
  }
`;

const template = () => html`
  <div class="wrap">

  </div>
`;

export const AppMain = () => {
	return {
		template,
		styles,
	};
};
