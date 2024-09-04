import { useOutletContext } from 'react-router-dom';
import ProductControl from './ProductControl';
import { resetCart } from '../utils/cartUtils';
import { formatPrice } from '../utils/priceFormatter';
const Cart = () => {
  const { cart, setCart } = useOutletContext();

  return (
    <div className='mt-4'>
      {cart.length === 0 ? (
        <div className='alert alert-info'>Your cart is empty :(</div>
      ) : (
        <>
          <table className='table bg-base-200'>
            <thead className='bg-base-300'>
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Line Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className='flex items-center gap-3'>
                      <div className='avatar'>
                        <div className='h-28 w-28 rounded-full'>
                          <img
                            src={product.image}
                            alt={product.name}
                            className='bg-white !object-contain'
                          />
                        </div>
                      </div>
                      <div>
                        <div className='font-bold'> {product.title}</div>
                        <div className='text-sm opacity-50'>
                          Unit Price: {formatPrice(product.price)}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='flex flex-col gap-2'>
                      <div>{product.description}</div>
                      <div className='badge badge-neutral p-3'>{product.category}</div>
                    </div>
                  </td>
                  <td>
                    <div className='w-44'>
                      <ProductControl product={product} />
                    </div>
                  </td>
                  <td className='w-28'>{formatPrice(product.quantity * product.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='flex justify-end mt-4'>
            <button className='btn btn-secondary mr-2' onClick={() => setCart(resetCart())}>
              Reset Cart
            </button>
            <button className='btn btn-accent' onClick={() => alert('coming soon')}>
              Checkout:{' '}
              {formatPrice(
                cart.reduce((total, product) => total + product.quantity * product.price, 0),
              )}
              €
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
