import { html } from "iares";
import { Ttemplate } from "./types.js";

import { AppToggle } from "@/components/AppToggle";
import { AppContent } from "@/components/AppContent";

export const template: Ttemplate = ({ state, props }) => html`
    <div class="wrap-ctx">
      <div class="filter-wrap-ctx">
        <${AppContent}>
        <slot target="content">
          <${AppToggle} label="alfabética" value=${1} />
        </slot>
        </>
      </div>
    </div>
`;
