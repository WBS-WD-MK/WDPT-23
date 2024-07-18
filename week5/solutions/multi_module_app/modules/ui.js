import { addToCart } from './storage.js';

export function createProductCard(product) {
  console.log(product);
  const div = document.createElement('div');
  div.className = 'shadow-md  rounded-lg';
  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.title;
  image.className = 'aspect-square rounded-t-lg';
  const title = document.createElement('h2');
  title.className = 'text-lg font-bold truncate';
  title.textContent = product.title;

  const price = document.createElement('p');
  price.textContent = product.price;
  const body = document.createElement('div');
  body.className = 'p-4 bg-[#31D892] rounded-b-lg';
  const button = document.createElement('button');
  button.textContent = 'Add to Cart';
  button.className = ' bg-pink-600 text-white rounded p-2 mt-2';
  button.addEventListener('click', () => addToCart(product));
  div.appendChild(image);
  body.appendChild(title);
  body.appendChild(price);
  body.appendChild(button);
  div.appendChild(body);
  return div;
}
