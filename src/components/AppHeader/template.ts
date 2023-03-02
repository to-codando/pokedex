import { html } from "iares";
import { Ttemplate } from "./types";

import { AppContent } from "@/components/AppContent";

export const template: Ttemplate = ({ props }) => html`
  <div class="wrap-ctx">
    <${AppContent}>
      <slot target="content" ctx="app-header">
        <h1 class="title-ctx">App Header</h1>
      </slot>
    </>
  </div>
`;
