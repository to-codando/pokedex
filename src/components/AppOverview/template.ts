import { html } from "iares";
import { Ttemplate } from "./types";

import { AppContent } from "@/components/AppContent";

export const template: Ttemplate = ({ props }) => html`
  <div class="wrap-ctx">

    <${AppContent}>
      <slot target="content">
        <h1>  App Overview </h1>
      </slot>
    </>
  </div>
`;
