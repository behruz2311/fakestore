import React, { useContext } from 'react';
import ReactStars from 'react-rating-stars-component';
import { MainContext } from '@/context/useMainContext';

const Card = ({ data, cart }) => {
  const { image, title, description, price, rating, id } = data;
  const { addToCart, removeFromCart } = useContext(MainContext);
  return (
    <div className="bg-white rounded-[30px]  p-5">
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
          {price.toLocaleString('en-US', {
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
          onClick={() => (cart ? removeFromCart(id) : addToCart(data))}>
          {cart ? 'REMOVE' : 'ADD'}
        </button>

        <ReactStars
          count={5}
          size={30}
          value={Math.round(rating.rate)}
          activeColor="#ffd700"
        />
      </div>
    </div>
  );
};

export default Card;
