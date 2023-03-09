import HttpRequestMock from "http-request-mock";

const mocker = HttpRequestMock.setup();
const url = "https://unpkg.com/pokemons@1.1.0/pokemons.json";
const body = {
	pockemons: [
		{
			national_number: "001",
			evolution: null,
			sprites: {
				normal:
					"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png",
				large: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
				animated:
					"https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif",
			},
			name: "Bulbasaur",
			type: ["Grass", "Poison"],
			total: 318,
			hp: 45,
			attack: 49,
			defense: 49,
			sp_atk: 65,
			sp_def: 65,
			speed: 45,
		},
		{
			national_number: "002",
			evolution: null,
			sprites: {
				normal:
					"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ivysaur.png",
				large: "https://img.pokemondb.net/artwork/ivysaur.jpg",
				animated:
					"https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif",
			},
			name: "Ivysaur",
			type: ["Grass", "Poison"],
			total: 405,
			hp: 60,
			attack: 62,
			defense: 63,
			sp_atk: 80,
			sp_def: 80,
			speed: 60,
		},
		{
			national_number: "003",
			evolution: {
				name: "Mega Venusaur",
			},
			sprites: {
				normal:
					"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venusaur.png",
				large: "https://img.pokemondb.net/artwork/venusaur.jpg",
				animated:
					"https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif",
			},
			name: "Venusaur",
			type: ["Grass", "Poison"],
			total: 625,
			hp: 80,
			attack: 100,
			defense: 123,
			sp_atk: 122,
			sp_def: 120,
			speed: 80,
		},
		{
			national_number: "003",
			evolution: null,
			sprites: {
				normal:
					"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venusaur.png",
				large: "https://img.pokemondb.net/artwork/venusaur.jpg",
				animated:
					"https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif",
			},
			name: "Venusaur",
			type: ["Grass", "Poison"],
			total: 525,
			hp: 80,
			attack: 82,
			defense: 83,
			sp_atk: 100,
			sp_def: 100,
			speed: 80,
		},
	],
};

export const startMock = () => {
	mocker.mock({ url, body });
};

export const getPokemons = () => body;
