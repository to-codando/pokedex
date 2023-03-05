import { html, render } from "iares";
import { TRoute } from "iares";

import { AppDefault } from "@/components/AppDefault";
import { AppShowRoom } from "@/components/AppShowRoom";
import { AppOverview } from "@/components/AppOverview";

export const routes: TRoute[] = [
	{
		regex: /^\/404$/,
		default: "#/404",
		mount: ({ context }) => {
			render(html`<${AppDefault} />`, context);
		},
	},
	{
		regex: /^#\/$|^#\/home$/,
		start: "#/",
		mount: ({ context }) => {
			render(html`<${AppShowRoom} />`, context);
		},
	},
	{
		regex: /^#\/$|^#\/pokemon$/,
		start: "#/",
		mount: ({ context }) => {
			render(html`<${AppOverview} />`, context);
		},
	},
];
