import Button from "@/app/pokemon/button";
import Link from "next/link";

async function PokemonPage() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon')
  const pokemonList = await response.json()
  return <div>
    <h1>Pokemon list</h1>
    <div>
      <Button/>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {pokemonList.results.map((pokemon: any) => {
          return <Link key={pokemon.name}
                       href={`/pokemon/${pokemon.name}`}>
            {pokemon.name}
          </Link>
        })}
      </div>
    </div>
  </div>
}

export default PokemonPage