import { html } from "iares";
import { Ttemplate } from "./types";

export const template: Ttemplate = ({ props }) => html`
  <span
    class="material-symbols-rounded"
    onClick=${() => props?.handle?.()}
    style="${props?.color ? `color:${props.color}` : ""}"
    icon
  >
    ${props.name}
  </span>
`;
