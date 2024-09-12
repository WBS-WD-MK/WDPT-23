import { useContext } from 'react';
import { TodosContext } from '../context/TodosProvider';
const ToDoItem = ({ todo }) => {
  const { dispatch } = useContext(TodosContext);
  return (
    <li className='flex items-center mb-2'>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
        className='mr-2'
      />
      <span className={todo.completed && 'line-through text-gray-400'}>{todo.text}</span>
    </li>
  );
};

export default ToDoItem;
