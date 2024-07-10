const form = document.querySelector('form');
const ul = document.querySelector('ul');
const reload = document.querySelector('#reload');

const createListItem = newTask => {
  // Adding task to DOM
  // List item
  const li = document.createElement('li');
  li.setAttribute('id', newTask.id);
  li.textContent = newTask.content;
  li.classList.add('flex', 'items-center', 'justify-between', 'w-full', 'my-2');
  // Button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add(
    'px-4',
    'py-2',
    'bg-red-500',
    'hover:bg-red-400',
    'text-white',
    'rounded',
  );
  // Button event
  deleteButton.addEventListener('click', () => {
    const itemToDelete = ul.querySelector(`#${newTask.id}`);
    console.log('item', itemToDelete);
    // Delete element from storage preserving the rest
    const existingTasks = JSON.parse(localStorage.getItem('myTasks') || []);
    console.log(
      'ADSFSDAF',
      existingTasks.filter(t => t.id !== newTask.id),
    );
    localStorage.setItem('myTasks', JSON.stringify(existingTasks.filter(t => t.id !== newTask.id)));

    itemToDelete.remove();
  });
  // Adding button to list item and item to list
  li.appendChild(deleteButton);
  return li;
};

// Add event listener
form.addEventListener('submit', e => {
  // Prevent default to avoid reload of page
  e.preventDefault();
  // Check input has a value
  const userInput = e.target.elements.userInput.value;
  if (!userInput) return alert('Please enter something before submitting');
  // Get previous content from localStorage: key name "myTasks"
  const myTasks = JSON.parse(localStorage.getItem('myTasks')) || [];
  // Creating object
  const newTask = {
    id: `task-${crypto.randomUUID()}`,
    content: userInput,
  };
  const li = createListItem(newTask);
  ul.prepend(li);
  // Adding task to localStorage
  myTasks.unshift(newTask);
  localStorage.setItem('myTasks', JSON.stringify(myTasks));
  // Reset form
  e.target.reset();
});
// Reload event
reload.addEventListener('click', () => {
  window.location.reload();
});

// Read and load data
window.addEventListener('load', () => {
  // Get previous content from localStorage: key name "myTasks"
  const myTasks = JSON.parse(localStorage.getItem('myTasks')) || [];
  myTasks.forEach(t => {
    const li = createListItem(t);
    ul.appendChild(li);
  });
});
