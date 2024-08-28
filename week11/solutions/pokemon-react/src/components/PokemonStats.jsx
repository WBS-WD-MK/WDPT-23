const PokemonStats = ({ stats }) => {
  return (
    <ul>
      {stats.map(({ base_stat, stat }) => (
        <li key={stat.name} className='capitalize'>
          {stat.name}: {base_stat}
        </li>
      ))}
    </ul>
  );
};

export default PokemonStats;
