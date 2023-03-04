import { html } from "iares";
import { Ttemplate } from "./types";

export const template: Ttemplate = ({ props }) => html`
  <span class="wrap-ctx">${props.value}</span>
`;
