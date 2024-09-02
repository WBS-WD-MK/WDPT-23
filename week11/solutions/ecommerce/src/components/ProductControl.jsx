import React from 'react';
import { addToCart, removeFromCart } from '../utils/cartUtils';
import { useOutletContext } from 'react-router-dom';
const ProductControl = ({ product }) => {
  const { cart, setCart } = useOutletContext();
  const productIndex = cart.findIndex((p) => p.id === product.id);

  return (
    <div className='card-actions justify-center'>
      {productIndex !== -1 ? (
        <div>
          <button
            className='btn btn-primary'
            onClick={() => setCart(removeFromCart(cart, product, productIndex))}
          >
            -
          </button>
          <span className='px-4'>{cart[productIndex].quantity}</span>
          <button
            className='btn btn-primary'
            onClick={() => setCart(addToCart(cart, product, productIndex))}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className='btn btn-primary'
          onClick={() => setCart(addToCart(cart, product, productIndex))}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductControl;
