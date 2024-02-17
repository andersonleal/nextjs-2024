interface PokemonPageProps {
  params: {
    name: string
  }
}

async function PokemonDetailPage({params}: PokemonPageProps) {
  return <div>
    <h1>Pokemon Detail</h1>
    <div>
      {params.name}
    </div>
  </div>
}

export default PokemonDetailPage