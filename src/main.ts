import { createApp, html, render, router } from "iares";

import { routes } from "./routes";

import { AppMain } from "@/components/appMain";

export const appHost = createApp({
	onMount(context, props) {
		render(html`<${AppMain} />`);
		router({ routes, context }).init();
	},
});
