import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Pokemon from './components/Pokemon';
import Posts from './components/Posts';
import Candle from './components/Candle';
const Timer = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log('componentWillUnmount');
    };
  }, []);
  return <div>{time}</div>;
};
function App() {
  const [count, setCount] = useState(2);
  useEffect(() => {
    console.log('componentDidMount');
  }, []);
  useEffect(() => {
    console.log('componentDidUpdate', count);
  }, [count]);

  return (
    <>
      <Candle />
      {count < 5 && <Timer />}
      {count % 2 === 0 && <Pokemon limit={count} />}
      <Posts />
    </>
  );
}

export default App;
