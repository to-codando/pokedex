import { html } from "iares";
import { Ttemplate } from "./types";

import { AppContent } from "@/components/AppContent";
import { AppCard } from "@/components/AppCard";
import { AppTitle } from "@/components/AppTitle";
import { AppTag } from "@/components/AppTag";
import { AppPokeCard } from "@/components/AppPokeCard";
import { AppPowerBar } from "@/components/AppPowerBar";

export const template: Ttemplate = ({ state, actions }) => {
	return html`
  <div class="wrap-ctx">

    <${AppContent}>
      <slot target="content" ctx="app-overview">
        <div class="grid">
          <div class="xxl-col-6 xl-col-6 lg-col-12 sm-col-12 ">
            <${AppCard}>
              <slot target="content" ctx="app-overview">
                <div class="wrap-image-ctx">
                  <img src="${state?.sprites?.large}" />
                </div>
              </slot>
            </>
          </div>
          <div class="xxl-col-6 xl-col-6 lg-col-12 sm-col-12">
            <${AppTitle} 
              value="${state?.national_number} - ${state?.name}" 
              height=${3} size=${1}
            />
            <div class="wrap-tag-ctx">
            ${state?.type?.map((type) => html`<${AppTag} value=${type}/>`)}
              

            </div>
            <div class="wrap-powerbar-ctx">
            ${
							state.hp &&
							html`
                <${AppPowerBar} 
                  label="HP"  
                  value=${state.hp} 
                  size=${actions.calculateSkillPower(state.hp)} 
                />           
              `
						}
            
            ${
							state.attack &&
							html`
                <${AppPowerBar} 
                  label="Ataque"  
                  value=${state.attack} 
                  size=${actions.calculateSkillPower(state.attack)} 
                />           
              `
						}

            ${
							state.sp_atk &&
							html`
                <${AppPowerBar} 
                  label="Ataque especial"  
                  value=${state.sp_atk} 
                  size=${actions.calculateSkillPower(state.sp_atk)} 
                />           
              `
						}

            ${
							state.defense &&
							html`
                <${AppPowerBar} 
                  label="Defesa"  
                  value=${state.defense} 
                  size=${actions.calculateSkillPower(state.defense)} 
                />           
              `
						}

            ${
							state.sp_def &&
							html`
                <${AppPowerBar} 
                  label="Defesa especial"  
                  value=${state.sp_def} 
                  size=${actions.calculateSkillPower(state.sp_def)} 
                />           
              `
						}

            ${
							state.speed &&
							html`
                <${AppPowerBar} 
                  label="Velocidade"  
                  value=${state.speed} 
                  size=${actions.calculateSkillPower(state.speed)} 
                />           
              `
						}
            
            ${
							state.total &&
							html`
                <${AppPowerBar} 
                  label="TOTAL"  
                  value=${state.total} 
                  size=${actions.calculateTotalPower(state.total)} 
                />           
              `
						}
   
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
};
