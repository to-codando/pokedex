import { html, css } from "iares";

import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";

const styles = () => css`
  app-main,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap:wrap;
    width:100%;
  }
`;

const template = () => html`
  <div class="wrap-ctx">
    <${AppHeader}/>
    <router-view></router-view>
    <${AppFooter}/>
  </div>
`;

export const AppMain = () => {
	return {
		template,
		styles,
	};
};
