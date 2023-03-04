import { html } from "iares";
import { Ttemplate } from "./types";

import { AppCard } from "@/components/AppCard";
import { AppIcon } from "@/components/AppIcon";
import { AppTitle } from "@/components/AppTitle";
import { AppTag } from "@/components/AppTag";

export const template: Ttemplate = ({ props }) => html`
  <div class="wrap-ctx">
    <${AppCard}>
      <slot target="content" ctx="app-poke-card">
        <div class="content-ctx">
          <p class="code-ctx">#336655</p>
          <div class="icon-ctx">
            <${AppIcon} name="favorite" color="#818b88" size="24"/>
          </div>
          <div class="image-ctx">
            <img src="/assets/images/pokemon-sample-${props?.image}.png"/>
          </div>
        </div>
      </slot>
    </>

    <${AppTitle} value="Zarama" size="2" height="2"/>

    <${AppTag} value="Earth"/>
    <${AppTag} value="water"/>
    <${AppTag} value="wind"/>

  </div>
`;
