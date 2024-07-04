// You can work here or download the template
// Array of 10 random tasks as strings
const tasks = [
  'Complete the project',
  'Attend the meeting',
  'Write a report',
  'Review the code',
  'Fix the bugs',
  'Update the documentation',
  'Plan the next sprint',
  'Conduct user testing',
  'Optimize the performance',
  'Design',
];

/*
JavaScript Tasks:
Attach an event to the first button to create a new li in the ul with a random task from the provided array.
Make sure you scroll to the last task so the last one is always visible!
Attach an event to the second button to display an alert with a custom message.
Attach an event to the third button to output a custom message to the console.
What would happen if instead of element.addEventListener('click', listener) you would  do element.onclick = listener? What are the differences? 
*/
const addItemButton = document.querySelector('#add-item-btn');
const alertButton = document.querySelector('#alert-btn');
const consoleButton = document.querySelector('#console-btn');
const itemsList = document.querySelector('#item-list');
addItemButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * tasks.length);
  const li = document.createElement('li');
  li.textContent = tasks[randomIndex];
  itemsList.appendChild(li);
  itemsList.scrollTop = itemsList.scrollHeight;
  console.log(randomIndex);
});
alertButton.addEventListener('click', () => {
  alert('Hello');
});
consoleButton.addEventListener('click', () => {
  console.log('Hello');
});
consoleButton.addEventListener('click', () => {
  console.log('Hello again!!');
});
consoleButton.onclick = () => {
  console.log('This will only show if it was the only event added using onclick');
};
consoleButton.onclick = () => {
  console.log('Only the last event using onClick will be working');
};
