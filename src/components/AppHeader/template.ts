import { html } from "iares";
import { Ttemplate } from "./types";

import { AppContent } from "@/components/AppContent";
import { AppIcon } from "@/components/AppIcon";
import { AppSearch } from "@/components/AppSearch";

export const template: Ttemplate = ({ props }) => html`
  <div class="wrap-ctx">
    <${AppContent}>
      <slot target="content" ctx="app-header">
        <div class="header-grid-ctx">
          <h1 class="logo-ctx">
            <img src="./assets/images/logo-pokedex.png" alt="Pokedex" class="logo-image-ctx"/>
          </h1>
          <div class="search-wrap-ctx">
            <${AppSearch} placeholder="Pesquise por nome ou código" />
          </div>
          <div class="user-wrap-ctx">
            <${AppIcon} name="account_circle" size=${64} color="#fff"/>
          </div>
        </div>
      </slot>
    </>
  </div>
`;
