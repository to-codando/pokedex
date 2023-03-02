import { html } from "iares";
import { Ttemplate } from "./types";

import { AppIcon } from "@/components/AppIcon";

export const template: Ttemplate = ({ props }) => html`
  <div class="wrap-ctx">
    <input type="text"/>
    <i>
      <${AppIcon} name="search" size=${32}/>
    </i>
  </div>
`;
