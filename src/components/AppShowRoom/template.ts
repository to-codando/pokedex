import { html } from "iares";
import { Ttemplate } from "./types.js";

import { AppContent } from "@/components/AppContent";
import { AppFilter } from "@/components/AppFilter";

export const template: Ttemplate = () => html`
    <div class="wrap-ctx">
      <div class="filter-wrap-ctx">
        <${AppContent}>
          <slot target="content">
            <${AppFilter} />
          </slot>
        </>
      </div>
    </div>
`;
