import type { Pokemon, PokemonsList } from "../types.js";

const pokemonUrlApi = "https://pokeapi.co/api/v2/";

export const getPokemons = async (
  limitCounter: number,
  offsetCounter: number
) => {
  try {
    const pokemonsPathList =
      pokemonUrlApi + `pokemon?limit=${limitCounter}&offset=${offsetCounter}`;

    const response = await fetch(pokemonsPathList);
    const { results } = (await response.json()) as PokemonsList;

    return results;
  } catch (error: unknown) {}
};

export const getPokemonByName = async (name: string) => {
  try {
    const pokemonPathByName = pokemonUrlApi + `pokemon/${name}`;
    const response = await fetch(pokemonPathByName);
    const pokemonInfo = (await response.json()) as Pokemon;

    return pokemonInfo;
  } catch (error: unknown) {}
};
