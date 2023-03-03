import { html } from "iares";
import { Ttemplate } from "./types.js";

import { AppToggle } from "@/components/AppToggle";
import { AppContent } from "@/components/AppContent";

export const template: Ttemplate = ({ state, props }) => html`
    <div class="wrap-ctx">
      <div class="filter-wrap-ctx">
        <${AppContent}>
        <slot target="content">
          <div class="grid">

            <div class="xxl-col-10 xl-col-10 lg-col-9 sm-col-8">
              <div class="grid">
                  <div class="xxl-col-3 xl-col-3 lg-col-5 sm-col-6">
                    <${AppToggle} label="alfabética" value=${1} />
                  </div>
                  <div class="xxl-col-3 xl-col-3 lg-col-5 sm-col-6">
                    <${AppToggle} label="alfabética" value=${1} />
                  </div>
              </div>
            </div>

            <div class="xxl-col-2 xl-col-2 lg-col-3 sm-col-4">
              <${AppToggle} label="alfabética" value=${1} />
            </div>

          </div>
        </slot>
        </>
      </div>
    </div>
`;
