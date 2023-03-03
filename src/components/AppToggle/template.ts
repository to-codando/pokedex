import { html, HTMType } from "iares";
import { TappOption, Ttemplate } from "./types";

const AppOption: TappOption = ({ props }) => {
	return html`
    <p>${props.label}</p>
  `;
};

export const template: Ttemplate = ({ props, state }) => html`
  <div class="wrap-ctx">
    <${AppOption} label="Alfabética" value=${1}/>
  </div>
`;
