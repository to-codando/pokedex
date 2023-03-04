import { html } from "iares";
import { Ttemplate } from "./types";

import { AppToggle } from "@/components/AppToggle";
import { AppTitle } from "@/components/AppTitle";

export const template: Ttemplate = ({ props }) => html`
  <div class="grid">
    <div class="xxl-col-10 xl-col-10 lg-col-9 sm-col-8">
      <div class="grid">
          <div class="xxl-col-3 xl-col-3 lg-col-5 sm-col-6">
            <${AppTitle} icon="sort" value="Ordem" size="3"/>
            <${AppToggle} label="alfabética" value=${1} />
          </div>
          <div class="xxl-col-3 xl-col-3 lg-col-5 sm-col-6">
            <${AppTitle} icon="swap_vert" value="Direção" size="3"/>
            <${AppToggle} label="Crescente" value=${1} />
          </div>
      </div>
    </div>

    <div class="xxl-col-2 xl-col-2 lg-col-3 sm-col-4">
      <${AppTitle} icon="favorite" value="Favoritos" size="3"/>
      <${AppToggle} label="Ativado" value=${1} />
    </div>
  </div>
`;
