import { html } from "iares";
import { Ttemplate } from "./types";

import { AppIcon } from "@/components/AppIcon";
import { debounce } from "@/utils/debounce";

export const template: Ttemplate = ({ state, props, actions }) => html`
  <div class="wrap-ctx">
    <input 
      type="text"
      placeholder=${props?.placeholder} 
      value=${state.value}
      onKeyup=${debounce(actions.setTerm, 1000)}
    />
    <i>
      <${AppIcon} name="search" size=${32}/>
    </i>
  </div>
`;
