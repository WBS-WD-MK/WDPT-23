// You can work here or download the template

import { useState } from 'react';
import Counter from './components/Counter';
import Form from './components/Form';

// Your components go here

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [items, setItems] = useState(['item1', 'item2', 'item3']);
  const [setselectedItem, setSetselectedItem] = useState(null);
  const decrementAll = () => {
    setCount1(count1 - 1);
    setCount2(count2 - 1);
    setCount3(count3 - 1);
  };
  const incrementAll = () => {
    setCount1(count1 + 1);
    setCount2(count2 + 1);
    setCount3(count3 + 1);
  };
  const handleBackClick = () => {
    setSetselectedItem(null);
  };
  return (
    <div>
      {setselectedItem ? (
        <>
          <h3>{setselectedItem}</h3>
          <button onClick={handleBackClick}> Go back</button>
        </>
      ) : (
        <>
          <Form />
          <Counter count={count1} setCount={setCount1} />
          <Counter count={count2} setCount={setCount2} />
          <Counter count={count3} setCount={setCount3} />
          <button onClick={decrementAll}>decrementAll</button>
          <button onClick={incrementAll}>IncrementAll</button>
          <br />
          {items.map((item, index) => (
            <button key={index} onClick={() => setSetselectedItem(item)}>
              {item}
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default App;
