import { useContext } from 'react';
import { Header, CartItems } from '@/component';
import { MainContext } from '@/context/useMainContext';

const Cart = () => {
  const { cartItems } = useContext(MainContext);
  const priceResult = cartItems.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="text-3xl font-bold mb-10">
          {cartItems.length ? 'Cart ' : 'Cart is empty'}
        </h2>
        <div className="grid grid-cols-4 gap-5 w-full mx-auto">
          {cartItems.map((el) => (
            <CartItems
              key={el.id}
              data={el}
            />
          ))}
        </div>

        <div className="flex items-center justify-between mt-10 bg-slate-900 p-5 rounded-2xl">
          <span className=" block bg-orange-500 py-4 px-8 rounded-xl text-white text-2xl w-max">
            Total price:{' '}
            {priceResult.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </span>
          <button
            type="button"
            className="block bg-green-500 py-4 px-12 rounded-xl text-white text-2xl ">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
