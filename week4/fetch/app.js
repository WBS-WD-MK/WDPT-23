// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(data => console.log('data', data))
//   .catch(e => console.error('Fetch Error', e));
// console.log('Hello After');

function hello(number) {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve('YESSSSS');
    } else {
      reject('NOOOOO');
    }
  });
}

hello(50)
  .then(data => console.log(data))
  .catch(e => console.log(e));
async function x() {
  try {
    const data = await hello(50);
    console.log('ASYNC', data);
  } catch (error) {
    console.log('ERROR');
  }
}
x();
