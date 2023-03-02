import { html } from "iares";
import { Ttemplate } from "./types";

import { AppContent } from "@/components/AppContent";
import { AppLogo } from "@/components/AppLogo";
import { AppIcon } from "@/components/AppIcon";

// rome-ignore lint: module is not javascript
import logo from "@/assets/images/logo-pokedex.png";

export const template: Ttemplate = ({ props }) => html`
  <div class="wrap-ctx">
    <${AppContent}>
      <slot target="content" ctx="app-header">
        <div class="header-grid-ctx">
          <h1>
            <img src="${logo}" alt="Pokedex" class="logo-image-ctx"/>
          </h1>
          <div class="search-wrap-ctx"></div>
          <div class="user-wrap-ctx">
            <${AppIcon} name="account_circle" size=${64} color="#fff"/>
          </div>
        </div>
      </slot>
    </>
  </div>
`;
