// function myFunc(url) {
//   return fetch(url)
//     .then(res => res.json())
//     .then(data => data)
//     .catch(e => console.log(e));
// }

// myFunc('https://digimon-api.vercel.app/api/digimon')
//   .then(data => console.log('WHAT IS THis', res))
//   .catch(e => console.log(e));

function myFunc1(url) {
  return fetch(url);
}

myFunc1('https://digimon-api.vercel.app/api/digimon')
  .then(res => res.json())
  .then(data => console.log(data[0]))
  .catch(e => console.log(e));

async function myFunc2(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function init() {
  try {
    const data = await myFunc2('https://digimon-api.vercel.app/api/digimon');
    console.log('THIS NEW DATA', data);
  } catch (error) {
    console.log(error);
  }
}
init();
