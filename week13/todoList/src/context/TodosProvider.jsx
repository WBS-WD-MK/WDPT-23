import { createContext, useReducer } from 'react';

export const TodosContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newState = {
        ...state,
        todos: [
          ...state.todos,
          { id: crypto.randomUUID(), text: action.payload, completed: false },
        ],
      };
      localStorage.setItem('todos', JSON.stringify(newState.todos));
      return newState;

    case 'TOGGLE_TODO':
      const updatedState = {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo;
        }),
      };
      localStorage.setItem('todos', JSON.stringify(updatedState.todos));
      return updatedState;

    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    filter: 'all',
  });

  return <TodosContext.Provider value={{ state, dispatch }}>{children}</TodosContext.Provider>;
};

export default TodosProvider;
