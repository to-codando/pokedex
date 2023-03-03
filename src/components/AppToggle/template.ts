import { html, HTMType } from "iares";
import { TappOption, Ttemplate } from "./types";

import { AppIcon } from "@/components/AppIcon";

const AppOption: TappOption = ({ props }) => {
	return html`
    <p>${props.label}</p>
  `;
};

export const template: Ttemplate = ({ props, state }) => html`
  <div class="wrap-ctx">
    <${AppOption} label=${props?.label} value=${props?.value}/>
    <button>
      <${AppIcon} name="repeat" size=${24} color="#fff"/>
    </button>
  </div>
`;
