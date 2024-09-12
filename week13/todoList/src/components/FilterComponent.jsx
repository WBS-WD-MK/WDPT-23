import { TodosContext } from '../context/TodosProvider';
import { useContext } from 'react';
const FilterComponent = ({ setFilter }) => {
  const { state, dispatch } = useContext(TodosContext);
  const filters = ['all', 'completed', 'active'];
  return (
    <div className='mb-4 flex space-x-2'>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => dispatch({ type: 'SET_FILTER', payload: filter })}
          className='bg-gray-200 px-3 py-1 rounded'
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterComponent;
