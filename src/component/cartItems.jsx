import React, { useContext } from 'react';
import { MainContext } from '@/context/useMainContext';

const CartItems = ({ data }) => {
  const { image, title, description, price, id, quantity } = data;
  const { removeFromCart, addOne, removeOne } = useContext(MainContext);
  return (
    <div className="bg-white rounded-[30px]  p-5 border-2 border-gray-400">
      <div className="w-full h-[286px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex items-start justify-between gap-5 w-full mt-3">
        <h2 className="text-lg font-bold  line-clamp-2">{title}</h2>
        <span className="text-lg text-green-500 font-bold">
          {(price * quantity).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </span>
      </div>

      <p className="line-clamp-3 mt-4 font-sm font-medium text-gray-600">
        {description}
      </p>

      <div className="flex items-center justify-between mt-5">
        <button
          type="button"
          className="px-5 py-3 bg-orange-500 rounded-md text-white"
          onClick={() => removeFromCart(id)}>
          Remove
        </button>

        <div className="flex items-center gap-5">
          <button
            type="button"
            className="bg-green-500 text-white font-medium text-lg py-2 px-4 rounded-lg"
            onClick={() => addOne(id)}
            disabled={quantity == 10}>
            +
          </button>
          <span className="font-bold">{quantity}</span>
          <button
            type="button"
            className="bg-red-500 text-white font-medium text-lg py-2 px-4 rounded-lg"
            onClick={() => removeOne(id)}
            disabled={quantity == 1}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
