export interface ComponentStructure {
  element: Element;
  render: () => void;
}

export interface Pokemon {
  name: string;
  id: number;
  types: Type[];
  sprites: {
    front_default: string;
  };
}

export interface Type {
  type: {
    name: string;
  };
}

export interface ResultsList {
  name: string;
}

export interface PokemonsList {
  results: ResultsList[];
}
