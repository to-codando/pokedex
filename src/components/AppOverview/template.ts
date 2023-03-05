import { html } from "iares";
import { Ttemplate } from "./types";

import { AppContent } from "@/components/AppContent";
import { AppCard } from "@/components/AppCard";
import { AppTitle } from "@/components/AppTitle";
import { AppTag } from "@/components/AppTag";
import { AppPokeCard } from "@/components/AppPokeCard";

export const template: Ttemplate = ({ props }) => html`
  <div class="wrap-ctx">

    <${AppContent}>
      <slot target="content" ctx="app-overview">
        <div class="grid">
          <div class="xxl-col-6">
            <${AppCard}>
              <slot target="content" ctx="app-overview">
                <div class="wrap-image-ctx">
                  <img src="/assets/images/pokemon-sample-2.png" />
                </div>
              </slot>
            </>
          </div>
          <div class="xxl-col-6">
            <${AppTitle} value="#556699 - Zaramana" height=${3} size=${1}/>
            <div class="wrap-tag-ctx">
              <${AppTag} value="ground"/>
              <${AppTag} value="ground"/>
              <${AppTag} value="ground"/>
              <${AppTag} value="ground"/>
            </div>
          </div>
        </div>
      </slot>
    </>

    <${AppContent}>
      <slot target="content" ctx="app-overview">
        <div class="wrap-ctx">
          <div class="wrap-title-ctx">
            <${AppTitle} icon="list_alt" value="Pokemons semelhantes" height=${2} size=${2}/>
          </div>
          <div class="grid">
            <div class="xxl-col-3">
              <${AppPokeCard} image="1"/>
            </div>
            <div class="xxl-col-3">
              <${AppPokeCard} image="2"/>
            </div>
            <div class="xxl-col-3">
              <${AppPokeCard} image="1"/>
            </div>
            <div class="xxl-col-3">
              <${AppPokeCard} image="2"/>
            </div>
          </div>
        </div>
      </slot>
    </>
  </div>
`;
