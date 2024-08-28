const PokemonSprites = ({ sprites }) => {
  const imageElement = (key, src, alt) => (
    <div key={key} className='tooltip' data-tip={alt}>
      <img src={src} alt={alt} width={100} />
    </div>
  );

  const renderSprites = sprites => {
    return Object.keys(sprites).map(key => {
      if (typeof sprites[key] === 'string') {
        return imageElement(key, sprites[key], key);
      } else if (key === 'other') {
        return Object.keys(sprites[key]).map(k => {
          const source = k;
          return Object.keys(sprites[key][k]).map(i => {
            if (typeof sprites[key][k][i] === 'string')
              return imageElement(`${source}-${i}`, sprites[key][k][i], `${source}-${i}`);
          });
        });
      } else if (key === 'versions') {
        return Object.keys(sprites[key]).map(k => {
          const gen = k;
          return Object.keys(sprites[key][k]).map(i => {
            const version = i;
            return Object.keys(sprites[key][k][i]).map(j => {
              if (typeof sprites[key][k][i][j] === 'string')
                return imageElement(
                  `${gen}-${version}-${j}`,
                  sprites[key][k][i][j],
                  `${gen}-${version}-${j}`
                );
              return null;
            });
          });
        });
      } else {
        return null;
      }
    });
  };

  return (
    <div className='grid grid-cols-12 items-center justify-center'>{renderSprites(sprites)}</div>
  );
};

export default PokemonSprites;
