const PokemonAbilities = ({ abilities }) => {
  return (
    <ul>
      {abilities.map(({ ability }) => (
        <li key={ability.name} className='capitalize'>
          {ability.name}
        </li>
      ))}
    </ul>
  );
};

export default PokemonAbilities;
