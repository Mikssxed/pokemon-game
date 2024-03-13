import axios from "axios";
import useSWR from "swr";
import { usePokemonStore } from "../store/pokemonStore";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const usePokemonList = () => {
  const { pokemonList } = usePokemonStore();

  const { data, error, isLoading } = useSWR(
    pokemonList.length <= 0
      ? "https://pokeapi.co/api/v2/pokemon-species?limit=905"
      : null,
    fetcher
  );

  if (pokemonList.length > 0) {
    return { isLoading: false, data: pokemonList };
  }

  return {
    isLoading,
    error,
    data: data?.results,
  };
};
