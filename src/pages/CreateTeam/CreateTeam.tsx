import { useEffect } from "react";
import { usePokemonStore } from "../../store/pokemonStore";
import classes from "./CreateTeam.module.css";

function CreateTeam() {
  const pokemonList = usePokemonStore((state) => state.pokemonList);
  const loadPokemonList = usePokemonStore((state) => state.loadPokemons);

  useEffect(() => {
    if (pokemonList.fetching) {
      loadPokemonList();
    }
  }, []);

  console.log(pokemonList);

  const pokemonListItems = pokemonList.list.map((pokemon) => {
    return (
      <li key={pokemon.name}>
        <p className={classes.pokemonName}>{pokemon.name}</p>
      </li>
    );
  });

  return (
    <div className={classes.section}>
      <ul className={classes.container}>{pokemonListItems}</ul>
    </div>
  );
}

export default CreateTeam;
