import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent.js";
import PageComponent from "./components/PageComponent/PageComponent.js";
import { getPokemons, getPokemonByName } from "./api/getPokemons.js";

const pageComponent = new PageComponent();
pageComponent.render();

const container = document.querySelector(".page-container")!;

const headerComponent = new HeaderComponent(container);
headerComponent.render();

(async () => {
  const pokemonListResponse = await getPokemons(10, 0);

  let downloadPokemons = [];

  for (let i = 0; i <= pokemonListResponse.length - 1; i++) {
    const pokemonByName = getPokemonByName(pokemonListResponse[i].name);
    downloadPokemons.push(pokemonByName);
  }

  downloadPokemons = await Promise.all(downloadPokemons);
})();
