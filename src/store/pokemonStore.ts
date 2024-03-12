import axios from "axios";
import { create } from "zustand";

interface pokemonStore {
  pokemonList: {
    fetching: boolean;
    next: string;
    list: { name: string; url: string }[];
  };
  loadPokemons: () => Promise<void>;
}

export const usePokemonStore = create<pokemonStore>((set) => ({
  pokemonList: { fetching: true, list: [], next: "" },
  loadPokemons: async () => {
    try {
      const data = await axios.get("https://pokeapi.co/api/v2/pokemon-species");
      set((state) => ({
        pokemonList: {
          fetching: false,
          next: data.data.next,
          list: [...state.pokemonList.list, ...data.data.results],
        },
      }));
    } catch (error) {
      console.error(error);
    }
  },
}));
