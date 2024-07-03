// const x = prompt('sdfdsf');
// alert()
// confirm()
// console.log('Hello', x);
const container = document.querySelector('.container');
const form = document.querySelector('#my-form');
// const form = document.getElementById('my-form');
// const container = document.querySelectorAll('.container');
// const container = document.getElementsByClassName('container');
console.log('container', container);

//1 create element
// not good
// container.innerHTML = '<p>sdfdf</p>';
const pElement = document.createElement('p');
const aElement = document.createElement('a');
const ulElement = document.createElement('ul');
//2 add content
pElement.textContent = 'this is from js';
aElement.textContent = 'this is a link!';
aElement.setAttribute('href', 'http://');
//3 append it to its container
container.appendChild(pElement);
container.appendChild(aElement);
container.appendChild(ulElement);
// Style
pElement.style.color = 'red';
pElement.style.fontWeight = 'bold';
pElement.classList.add('paragraph');
// pElement.className = 'paragraph x d';

// Events
pElement.addEventListener('click', () => {
  console.log('Hello');
});

form.addEventListener('submit', e => {
  const name = e.target.name.value;
  e.preventDefault();
  if (e.target.name.value) {
    const liE = document.createElement('li');
    liE.textContent = name;
    ulElement.appendChild(liE);
    e.target.reset();
  } else {
    alert('Please fill the name!!');
  }
});

function createElement(parent, tag, content, attKey, attValue) {
  const element = document.createElement(tag);
  element.textContent = content;
  parent.appendChild(element);
  if (attKey && attValue) {
    element.setAttribute(attKey, attValue);
  }
}

createElement(container, 'h2', 'Hello');
createElement(
  container,
  'img',
  '',
  'src',

  'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSE3zNnbeADg_Mk-hQ_A-cKTuUtXqdxfeAYYFOP7bGqkbXfp5fNMVVJcWwi7fRDLXg7xkmTSGGk2HqrsOQ8EYg',
);
