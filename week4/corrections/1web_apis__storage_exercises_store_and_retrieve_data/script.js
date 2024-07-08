// You can work here or download the template
/**
 Store data:

From the boilerplate, get the contents of the input once the form is submitted.
Make sure the input is not empty before saving!
Store this value in localStorage as part of an array. Store the new value at the beginning of the array!
Reset the form
Retrieve data:

Every time you hit the "Submit" button, add a new list item to the empty ul. Make sure the new item is at the top!
Make sure that when the document loads, you populate the contents of your storage item into the list. You can try to add an event listener of type load to the window itself!
Reload:

Just because we can. Add an event to the reload button so it reloads the preview. Your store data should reload too!
 */
//step1 get the elements
const form = document.querySelector('form');
// select by tag name,class,Id, att, body .name
// const form = document.getElementsByTagName("form")[0]
const ul = document.querySelector('ul');
const reload = document.querySelector('#reload');

//step2
// listen to events

form.addEventListener('submit', e => {
  e.preventDefault();
  const userInput = e.target.userInput.value;
  if (!userInput) {
    alert('Please enter value!!');
  } else {
    // step a
    // check if we have array in the local storage if not create empty array
    const names = JSON.parse(localStorage.getItem('names')) || [];
    console.log(typeof names);
    // step b add li to ul
    const li = document.createElement('li');
    li.textContent = userInput;
    ul.prepend(li);
    // ul.insertBefore(li, ul.firstChild);
    // step c
    names.unshift(userInput);
    localStorage.setItem('names', JSON.stringify(names));
    e.target.reset();
  }
});

reload.addEventListener('click', () => {
  window.location.reload();
});

window.addEventListener('load', () => {
  const names = JSON.parse(localStorage.getItem('names')) || [];
  names.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
  });
});
