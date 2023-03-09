import { expect } from "@esm-bundle/chai";

import { AppPokeCard } from "@/components/AppPokeCard";
import { template } from "@/components/AppPokeCard/template";
import { styles } from "@/components/AppPokeCard/styles";
import { createActions } from "@/components/AppPokeCard/actions";

describe("AppPokeCard", () => {
	const actions = createActions();
	const props = { data: null };
	const component = AppPokeCard({ props, actions });
	const template = component.template({ props, actions });
	it("Should have property object", () => {
		expect(component.props).to.have.a.key("data");
	});
});

console.log(AppPokeCard);
