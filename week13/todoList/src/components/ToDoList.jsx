import ToDoItem from './ToDoItem';
import { useContext } from 'react';
import { TodosContext } from '../context/TodosProvider';
const ToDoList = () => {
  const { state } = useContext(TodosContext);
  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === 'all') return true;
    if (state.filter === 'completed' && todo.completed) return true;
    if (state.filter === 'active' && !todo.completed) return true;
    return false;
  });

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
