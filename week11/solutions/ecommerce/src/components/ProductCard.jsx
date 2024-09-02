import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/priceFormatter';
import ProductControl from './ProductControl';
const ProductCard = ({ product }) => {
  return (
    <div className='card bg-base-300 shadow-xl'>
      <figure className='h-48 p-4'>
        <img src={product.image} alt={product.title} className='object-contain' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{product.title}</h2>
        <Link to={`/categories/${product.category}`} className='badge badge-primary'>
          {product.category}
        </Link>
        <p>{formatPrice(product.price)}</p>
        <ProductControl product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
