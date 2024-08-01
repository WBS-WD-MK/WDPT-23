const Events = () => {
  const handleChange = e => {
    console.log(e.target.value);
  };
  const handleClick = () => {
    console.log('Button clicked');
  };
  return (
    <div>
      Events
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Events;
