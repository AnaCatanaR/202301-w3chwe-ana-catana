import type { PokemonsList } from "../types.js";

const pokemonUrlApi = "https://pokeapi.co/api/v2/";

export const getPokemons = async (
  limitCounter: number,
  offsetCounter: number
) => {
  const pokemonsPathList =
    pokemonUrlApi + `pokemon?limit=${limitCounter}&offset=${offsetCounter}`;

  const response = await fetch(pokemonsPathList);
  const listResponse = (await response.json()) as PokemonsList;

  return listResponse;
};
