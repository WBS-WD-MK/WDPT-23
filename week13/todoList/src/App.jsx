import AddToDo from './components/AddToDo';
import FilterComponent from './components/FilterComponent';
import ToDoList from './components/ToDoList';
import TodosProvider from './context/TodosProvider';

const App = () => {
  return (
    <TodosProvider>
      <div className='container mx-auto p-4'>
        <AddToDo />
        <FilterComponent />
        <ToDoList />
      </div>
    </TodosProvider>
  );
};

export default App;
