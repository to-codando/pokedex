import { html } from "iares";
import { Ttemplate } from "./types";

import { AppContent } from "@/components/AppContent";
import { AppLogo } from "@/components/AppLogo";

// rome-ignore lint: module is not javascript
import logo from "@/assets/images/logo-pokedex.png";

export const template: Ttemplate = ({ props }) => html`
  <div class="wrap-ctx">
    <${AppContent}>
      <slot target="content" ctx="app-header">
        <img src="${logo}" alt="Pokedex" class="logo-image-ctx"/>
      </slot>
    </>
  </div>
`;
