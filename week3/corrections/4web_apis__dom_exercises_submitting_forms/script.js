// You can work here or download the template

/*
Add an event listener to handle form submission.
Validate that all fields are not empty.
If validation passes, output the form data to the console and display it in the p element as a list (ul)
If not output an error message in the p element, style it as an error. Maybe something red and flashy?
Make sure to toggle the error and success styles! 
Clear the form fields

*/
const form = document.querySelector('#contact-form');

const outputParagraph = document.querySelector('#output');
const ul = document.createElement('ul');
form.addEventListener('submit', e => {
  e.preventDefault();
  // get values
  if (!e.target.name.value || !e.target.email.value || !e.target.message.value) {
    outputParagraph.textContent = 'Please fill in all the fields.';
    outputParagraph.classList.remove('text-green-500');
    outputParagraph.classList.add('text-red-500');
  } else {
    // cleanup
    // outputParagraph.innerHTML = '';
    // ul.innerHTML = '';
    // for (let index = 0; index < e.target.elements.length; index++) {
    //   const element = e.target.elements[index];
    //   console.log(element.id, element.value);
    //   const li = document.createElement('li');
    //   if (element.id) {
    //     li.textContent = `${element.id}: ${element.value}`;
    //     ul.appendChild(li);
    //   }
    // }
    // outputParagraph.appendChild(ul);
    const template = `<ul>
    <li> name: ${e.target.name.value}</li>
    <li> email: ${e.target.email.value}</li>
    <li> message: ${e.target.message.value}</li>
    </ul>`;
    outputParagraph.innerHTML = template;
    outputParagraph.classList.remove('text-red-500');
    outputParagraph.classList.add('text-green-500');
    e.target.reset();
  }
  // console.log(e.target.name.value);
});
