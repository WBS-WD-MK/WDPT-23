import { useState, useEffect } from 'react';
import './candle.css';
const Candle = () => {
  const [height, setHeight] = useState(100);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setHeight((prevHeight) => {
  //       // if (prevHeight === 10) return 100;
  //       return prevHeight - 10;
  //     });
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  useEffect(() => {
    height === 10 && setHeight(100);
    return () => {
      console.log('ASDFSADFSDF');
    };
  }, [height]);

  return (
    <>
      <button onClick={() => setHeight((prev) => prev - 10)}>Blow</button>
      <div className='exercise'>
        <div className='candleContainer' style={{ height: `${height}%` }}>
          <div className='candle'>
            <div className='flame'>
              <div className='shadows' />
              <div className='top' />
              <div className='middle' />
              <div className='bottom' />
            </div>
            <div className='wick' />
            <div className='wax' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Candle;
