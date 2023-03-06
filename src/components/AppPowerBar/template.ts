import { html } from "iares";
import { Ttemplate } from "./types";

export const template: Ttemplate = ({ props }) => html`
  <div class="wrap-ctx">
    <p class="content-ctx">
      <span class="title-ctx">${props.label}</span>
      <span class="amount-ctx">${props.value.toString()}</span>
    </p>
    <div class="bar-ctx">
      <span style="width:${props.size.toString()}%"></span>
    </div>
  </div>
`;
