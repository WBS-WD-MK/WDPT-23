// You can work here or download the template
/**
 Instructions:

Fetch Data: Write JavaScript to fetch data for the first 150 Pokémon from the Pokémon API. More info can be found here
Display Data: Populate the DOM with the fetched Pokémon data as styled cards. Show us the name, image and type. The grid is already set up in the HTML file.
 */
const pokemonContainer = document.getElementById('pokemon-container');
// const renderPokemons = () => {
//   for (let id = 1; id <= 150; id++) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//       .then(res => res.json())
//       .then(pokemon => {
//         const pokemonCard = document.createElement('div');
//         pokemonCard.classList.add(
//           'bg-gray-300',
//           'rounded-lg',
//           'p-4',
//           'flex',
//           'flex-col',
//           'items-center',
//           'text-center',
//         );
//         const image = document.createElement('img');
//         image.src = pokemon.sprites.front_default;
//         image.alt = pokemon.name;
//         const name = document.createElement('h2');
//         name.textContent = pokemon.name;
//         name.classList.add('font-bold', 'text-xl');
//         const type = document.createElement('p');
//         type.textContent = pokemon.types.map(t => t.type.name).join(', ');
//         type.classList.add('text-gray-600');
//         // pokemon.types.forEach((t, i) => {
//         //   if (i === pokemon.types.length - 1) {
//         //     type.textContent += `${t.type.name}`;
//         //   } else {
//         //     type.textContent += `${t.type.name} | `;
//         //   }
//         // });

//         pokemonCard.appendChild(image);
//         pokemonCard.appendChild(name);
//         pokemonCard.appendChild(type);
//         pokemonContainer.appendChild(pokemonCard);
//       })
//       .catch(e => console.log(e));
//   }
// };
// renderPokemons();
const fetchPokemon = async id => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const renderPokemons = async () => {
  for (let id = 1; id <= 150; id++) {
    const pokemon = await fetchPokemon(id);
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add(
      'bg-gray-300',
      'rounded-lg',
      'p-4',
      'flex',
      'flex-col',
      'items-center',
      'text-center',
      'shadow-md',
    );
    const image = document.createElement('img');
    image.src = pokemon.sprites.front_default;
    image.alt = pokemon.name;
    const name = document.createElement('h2');

    // name.textContent = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    name.textContent = pokemon.name;
    name.classList.add('font-bold', 'text-xl', 'capitalize');
    const type = document.createElement('p');
    type.textContent = pokemon.types.map(t => t.type.name).join(', ');
    type.classList.add('text-gray-600');
    // pokemon.types.forEach((t, i) => {
    //   if (i === pokemon.types.length - 1) {
    //     type.textContent += `${t.type.name}`;
    //   } else {
    //     type.textContent += `${t.type.name} | `;
    //   }
    // });

    pokemonCard.appendChild(image);
    pokemonCard.appendChild(name);
    pokemonCard.appendChild(type);
    pokemonContainer.appendChild(pokemonCard);
  }
};
renderPokemons();
