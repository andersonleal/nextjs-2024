import Image from "next/image";
import {Suspense} from "react";

interface PokemonPageProps {
  params: {
    name: string
  }
}
// export async function generateStaticParams() {
//   return [
//     {name: 'bulbasaur'},
//     {name: 'ivysaur'},
//     {name: 'venusaur'},
//   ]
// }

function fetchPokemon(name: string) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(resp => resp.json())
}

export async function generateMetadata({params}: any) {
  const pokemon = await fetchPokemon(params.name)
  return {
    title: pokemon.name,
  };
}

async function LazyComponent() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000)
  })
  return <div style={{background: 'deepskyblue'}}>Lazy component</div>
}

async function PokemonDetailPage({params}: PokemonPageProps) {
  const pokemon = await fetchPokemon(params.name)

  return <div>
    <h1>Pokemon Detail</h1>
    <div>
      {pokemon.name}
    </div>

    <Image
      src={pokemon.sprites.other.home.front_default}
      width={200}
      height={200}
      alt={pokemon.name}/>

    <Suspense fallback={
      <div style={{background: 'red'}}>
        loading...
      </div>
    }>
      <LazyComponent/>
    </Suspense>
  </div>
}

export default PokemonDetailPage