import { ChangeEvent, useEffect, useState } from "react";
import Team from "../../components/Team/Team";
import { usePokemonList } from "../../hooks/usePokemonList";
import { usePokemonStore } from "../../store/pokemonStore";
import classes from "./CreateTeam.module.css";

function CreateTeam() {
  const [searchPokemon, setSearchPokemon] = useState<string>("");
  const [showParty, setShowParty] = useState(false);
  const { pokemonList, setPokemonList } = usePokemonStore();
  const { data, isLoading, error } = usePokemonList();

  useEffect(() => {
    if (!isLoading && !error) {
      setPokemonList(data);
    }
  }, [isLoading, setPokemonList, data, error]);

  const toggleTeam = () => {
    setShowParty((previous) => !previous);
  };

  const getNumberFromUrl = (url: string) => {
    const numberUrl = url.split("/")[6];
    return numberUrl;
  };

  const pokemonInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchPokemon((e.target as HTMLInputElement).value);
  };

  const pokemonListItems = pokemonList
    .filter((pokemon) => {
      if (!searchPokemon) {
        return pokemon;
      }

      return pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase());
    })
    .map((pokemon) => {
      return (
        <li key={pokemon.name} className={classes.listItem}>
          <img
            loading="lazy"
            className={classes.pokemonImg}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getNumberFromUrl(
              pokemon.url
            )}.png`}
            alt={pokemon.name}
          />
          <p className={classes.pokemonName}>{pokemon.name}</p>
        </li>
      );
    });

  return (
    <div className={classes.section}>
      <input
        placeholder="Search pokemon by name"
        className={classes.searchPoke}
        name="pokemonName"
        onChange={pokemonInputChange}
        value={searchPokemon}
      />
      <ul className={classes.container}>{pokemonListItems}</ul>
      <Team toggleTeam={toggleTeam} open={showParty} />
    </div>
  );
}

export default CreateTeam;
