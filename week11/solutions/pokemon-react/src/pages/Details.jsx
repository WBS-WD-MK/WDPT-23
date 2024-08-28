import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Accordion from '../components/Accordion';
import PokemonAbilities from '../components/PokemonAbilities';
import PokemonCries from '../components/PokemonCries';
import PokemonSprites from '../components/PokemonSprites';
import PokemonStats from '../components/PokemonStats';
import PokemonGeneral from '../components/PokemonGeneral';

const Details = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!res.ok) {
          console.log(res);
          throw new Error('Failed to fetch');
        }
        const data = await res.json();
        setPokemon(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [name]);

  if (loading) return <Loading />;
  if (!pokemon) return <div>Not found</div>;
  return (
    <>
      <PokemonGeneral name={pokemon.name} id={pokemon.id} />
      <Accordion title="Abilities" defaultChecked>
        <PokemonAbilities abilities={pokemon.abilities} />
      </Accordion>
      <Accordion title="Stats">
        <PokemonStats stats={pokemon.stats} />
      </Accordion>
      <Accordion title="Cries">
        <PokemonCries cries={pokemon.cries} />
      </Accordion>
      <Accordion title="Sprites">
        <PokemonSprites sprites={pokemon.sprites} />
      </Accordion>
    </>
  );
};

export default Details;
