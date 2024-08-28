import { Link } from 'react-router-dom';

const PokemonCard = ({ name, url }) => {
  const id = url.split('/')[6] || '0';
  return (
    <div className="card bg-neutral  shadow-xl">
      <figure>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          width="40%"
          alt="pokemon"
        />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title capitalize text-primary">{name}</h2>
        <Link to={`/pokemon/${name}`} className="btn btn-secondary">
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
