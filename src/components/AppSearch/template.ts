import { html } from "iares";
import { Ttemplate } from "./types";

import { AppIcon } from "@/components/AppIcon";

export const template: Ttemplate = ({ state, props }) => html`
  <div class="wrap-ctx">
    <input type="text" placeholder=${props?.placeholder} value=${state.value}/>
    <i>
      <${AppIcon} name="search" size=${32}/>
    </i>
  </div>
`;
