import { html } from "iares";
import { Tparams, Ttemplate } from "./types";

import { AppIcon } from "@/components/AppIcon";

const AppTitleSize = ({ props }: Tparams) => {
	if (props.size === 1) {
		return html`
    <h1 class="title-size-${props.size}">
      ${props.value}
    </h1>`;
	}
	if (props.size === 2) {
		return html`
    <h2 class="title-size-${props.size}">
      ${props.value}
    </h2>`;
	}
	if (props.size === 3) {
		return html`
    <h3 class="title-size-${props.size}">
      ${props.value}
    </h3>`;
	}
	return html``;
};

export const template: Ttemplate = ({ props }) => html`
  <div class="wrap-ctx">
    <${AppIcon} name=${props.icon} color="#818B88" size=${24}/>
    <${AppTitleSize} value=${props.value} size=${+props.size} />
  </div>
`;
