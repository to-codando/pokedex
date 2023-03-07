import { html } from "iares";
import { Ttemplate } from "./types";

import { AppCard } from "@/components/AppCard";
import { AppIcon } from "@/components/AppIcon";
import { AppTitle } from "@/components/AppTitle";
import { AppTag } from "@/components/AppTag";

export const template: Ttemplate = ({ props, actions }) => {
	return html`
  <div class="wrap-ctx" onClick=${actions.showOverview}>
    <${AppCard}>
      <slot target="content" ctx="app-poke-card">
        <div class="content-ctx">
          <p class="code-ctx">#${props.data.national_number}</p>
          <div class="icon-ctx">
            <${AppIcon} name="favorite" color="#818b88" size="24"/>
          </div>
          <div class="image-ctx">
            <img src="${actions.setImage(props.data.sprites.normal)}"/>
          </div>
        </div>
      </slot>
    </>

    <${AppTitle} value=${props.data.name} size="2" height="2"/>

    <div class="tags-ctx">
      ${props.data.type.map((type) => html`<${AppTag} value=${type}/>`)}
    </div>

  </div>
`;
};
