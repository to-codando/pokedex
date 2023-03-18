import { html } from "iares";
import { Ttemplate, TcopyParams } from "./types";

import { AppContent } from "@/components/AppContent";
import { AppIcon } from "@/components/AppIcon";

export const template: Ttemplate = () => html`
  <div class="wrap-ctx">
    <${AppContent}>
      <slot target="content" ctx="app-footer">
        <div class="grid">
          <div class="xxl-col-9 xl-col-9 lg-col-9 sm-col-6">
            <ul class="menu-ctx">
              <li>
                <a href="#/">Política de uso</a>
              </li>
              <li>
                <a href="#/">Sobre</a>
              </li>
              <li>
                <a href="#/">Contato</a>
              </li>
            </ul>
          </div>
          <div class="xxl-col-3 xl-col-3 lg-col-3 sm-col-6 align-brand-ctx">
            <img src="./assets/images/logo-citrux.png" />
          </div>
        </div>
      </slot>
    </$>

    <div class="copyright-ctx">
      <${AppIcon} name="copyright" color="#fff" size="24" />
      <span>${new Date().getFullYear().toString()} - Todos os direitos reservados</span>
    </div>
  </div>
`;
