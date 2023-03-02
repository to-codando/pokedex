import { html } from "iares";
import { Ttemplate } from "./types";

const AppIconSize: Ttemplate = ({ props }) => {
	if (props?.size && props?.color) {
		return html`
      <span
      class="material-symbols-rounded"
      style="font-size:${props.size}px;color:${props.color}"
      >
        ${props.name}
      </span>
    `;
	}

	if (props?.size && !props?.color) {
		return html`
      <span
      class="material-symbols-rounded"
      style="font-size:${props.size}px"
      >
        ${props.name}
      </span>
    `;
	}

	return html`
    <span class="material-symbols-rounded">
      ${props.name}
    </span>
  `;
};

export const template: Ttemplate = ({ props }) => html`
  <${AppIconSize}
    name=${props?.name}
    size=${props?.size}
    color=${props?.color}
  />
`;
