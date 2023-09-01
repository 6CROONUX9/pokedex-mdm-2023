import { PokemonCard } from "./PokemonCard"

export const PokemonList = ({pokemons}) => {

  return (
    <section className="grid px-4 gap-4  grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] bg-neutral-200 dark:bg-neutral-700  ">
        {
            pokemons.map((pokemon) => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url}/>)
        }
    </section>
  )
}