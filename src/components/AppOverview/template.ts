import { html } from "iares";
import { Ttemplate } from "./types";

import { AppContent } from "@/components/AppContent";
import { AppCard } from "@/components/AppCard";
import { AppTitle } from "@/components/AppTitle";
import { AppTag } from "@/components/AppTag";
import { AppPokeCard } from "@/components/AppPokeCard";
import { AppPowerBar } from "@/components/AppPowerBar";

export const template: Ttemplate = ({ props }) => html`
  <div class="wrap-ctx">

    <${AppContent}>
      <slot target="content" ctx="app-overview">
        <div class="grid">
          <div class="xxl-col-6 xl-col-6 lg-col-12 sm-col-12 ">
            <${AppCard}>
              <slot target="content" ctx="app-overview">
                <div class="wrap-image-ctx">
                  <img src="/assets/images/pokemon-sample-2.png" />
                </div>
              </slot>
            </>
          </div>
          <div class="xxl-col-6 xl-col-6 lg-col-12 sm-col-12">
            <${AppTitle} value="#556699 - Zaramana" height=${3} size=${1}/>
            <div class="wrap-tag-ctx">
              <${AppTag} value="ground"/>
              <${AppTag} value="ground"/>
              <${AppTag} value="ground"/>
              <${AppTag} value="ground"/>
            </div>
            <div class="wrap-powerbar-ctx">
              <${AppPowerBar} label="HP"                 value=${20} size=${30} />
              <${AppPowerBar} label="Ataque"             value=${30} size=${40} />
              <${AppPowerBar} label="Ataque especial"    value=${40} size=${30} />
              <${AppPowerBar} label="Defesa"             value=${50} size=${60} />
              <${AppPowerBar} label="Especial defensivo" value=${40} size=${80} />
              <${AppPowerBar} label="Velocidade"         value=${30} size=${30} />
              <${AppPowerBar} label="TOTAL"              value=${70} size=${70} />
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
              <div class="xxl-col-3 xl-col-3 lg-col-4 sm-col-6">
                <${AppPokeCard} image="1"/>
              </div>
              <div class="xxl-col-3 xl-col-3 lg-col-4 sm-col-6">
                <${AppPokeCard} image="2"/>
              </div>
              <div class="xxl-col-3 xl-col-3 lg-col-4 sm-col-6">
                <${AppPokeCard} image="1"/>
              </div>
              <div class="xxl-col-3 xl-col-3 lg-col-4 sm-col-6">
                <${AppPokeCard} image="2"/>
              </div>
          </div>
        </div>
      </slot>
    </>
  </div>
`;
