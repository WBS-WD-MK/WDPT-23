import { useState, useEffect } from 'react';
const Pokemon = ({ limit }) => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    let ignore = false;
    const getPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        if (!res.ok) throw new Error('Something went wrong');
        const data = await res.json();
        console.log('HELLO', ignore);
        if (!ignore) {
          setPokemon(data.results);
        }
      } catch (e) {
        console.error(e);
      }
    };
    getPokemon();

    return () => {
      ignore = true;
    };
  }, [limit]);

  return pokemon.map((p) => {
    return (
      <div key={p.name}>
        <span>{p.name}</span>
      </div>
    );
  });
};
export default Pokemon;
