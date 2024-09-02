import React from 'react';
import { addToCart, removeFromCart } from '../utils/cartUtils';
import { useOutletContext } from 'react-router-dom';
const ProductControl = ({ product }) => {
  const { cart, setCart } = useOutletContext();
  const inCart = cart.findIndex((p) => p.id === product.id);

  return (
    <div className='card-actions justify-center'>
      {inCart !== -1 ? (
        <div>
          <button
            className='btn btn-primary'
            onClick={() => setCart(removeFromCart(cart, product))}
          >
            -
          </button>
          <span className='px-4'>{cart[inCart].quantity}</span>
          <button
            className='btn btn-primary'
            onClick={() => setCart(addToCart(cart, product, inCart))}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className='btn btn-primary'
          onClick={() => setCart(addToCart(cart, product, inCart))}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductControl;
