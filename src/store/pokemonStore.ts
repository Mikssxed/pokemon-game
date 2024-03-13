import { create } from "zustand";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonStore {
  pokemonList: Pokemon[];
  setPokemonList: (data: Pokemon[]) => void; // Add setter function
}

export const usePokemonStore = create<PokemonStore>((set) => ({
  pokemonList: [],
  setPokemonList: (data) => {
    set(() => ({
      pokemonList: data,
    }));
  },
}));
