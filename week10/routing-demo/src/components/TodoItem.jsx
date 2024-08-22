import React, { useEffect, useState } from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div className='card bg-base-200 w-72 shadow-xl'>
      <figure>
        <img src={`https://robohash.org/${todo.title}`} alt={todo.title} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{todo.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default TodoItem;
