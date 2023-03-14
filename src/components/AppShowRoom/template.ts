import { html } from "iares";
import { Ttemplate } from "./types.js";

import { AppContent } from "@/components/AppContent";
import { AppFilter } from "@/components/AppFilter";
import { AppPokeCard } from "@/components/AppPokeCard";

export const template: Ttemplate = ({ state }) => html`
    <div class="wrap-ctx">
      <div class="filter-wrap-ctx">
        <${AppContent}>
          <slot target="content">
            <${AppFilter} />
          </slot>
        </>
      </div>
      <div class="cards-wrap-ctx">
        <${AppContent}>
          <slot target="content">

            <div class="grid">
            
              ${state.pokemons.map(
								(pokemon) => html`
                  <div class="xxl-col-3 xl-col-3 lg-col-4 sm-col-6">
                    <${AppPokeCard} data=${pokemon}/>
                  </div>              
                `,
							)}

            </div>

          </slot>
        </>
      </div>
    </div>
`;
