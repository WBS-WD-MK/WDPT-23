// You can work here or download the template
/**
Instructions:

Fetch Data: Write JavaScript to fetch todos from the JSON Placeholder API, we want the ToDos endpoint, you can find more about the API docs in here.
Display Data: Populate the DOM with the fetched todos. Pay attention to the completed status of each task in the response and style it accordingly!
 */

const todoListUl = document.getElementById('todo-list');

function fetchTodos() {
  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(data => renderList(data))
    .catch(e => console.log(e));
}

const renderList = todos => {
  todos.forEach(todo => {
    const li = document.createElement('li');
    console.log(todo);
    li.textContent = todo.title;
    if (todo.completed) {
      li.className = 'line-through';
    } else {
      // li.className = 'text-red-500';
    }
    todoListUl.appendChild(li);
  });
};
fetchTodos();
