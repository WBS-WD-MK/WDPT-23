import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const TodoDetails = () => {
  const [todo, setTodo] = useState(null);
  const [joke, setJoke] = useState(null);
  const { id } = useParams();
  const fetchData = async (url) => {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const getAll = async () => {
      setTodo(await fetchData(`https://jsonplaceholder.typicode.com/todos/${id}`));
      const jokeData = await fetchData('https://icanhazdadjoke.com/');
      setJoke(jokeData.joke);
    };
    getAll();
  }, [id]);

  return (
    <div>
      {todo ? (
        <div className='card bg-base-200 w-72 shadow-xl'>
          <figure>
            <img src={`https://robohash.org/${todo.title}`} alt={todo.title} />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{todo.title}</h2>
            <p>{joke}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TodoDetails;
