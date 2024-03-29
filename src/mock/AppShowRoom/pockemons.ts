import { TpokemonState } from "@/store";

export const filledPokemonState: TpokemonState = {
	pokemons: [
		{
			national_number: "#1a2b",
			sprites: {
				normal: "image.jpg",
				large: "image.jpg",
				animated: "image.gif",
			},
			name: "Squarel",
			type: ["water"],
			evolution: true,
			total: 120,
			hp: 40,
			attack: 60,
			defense: 70,
			sp_atk: 80,
			sp_def: 90,
			speed: 80,
		},
	],
};
