import { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await res.json();
        setPokemon(data.results);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
      {pokemon.map(({ name, url }) => (
        <PokemonCard key={name} name={name} url={url} />
      ))}
    </div>
  );
};

export default Home;
