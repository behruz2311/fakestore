import React, { useReducer } from 'react';
import Header from '@/component/header';
import { reducer } from '@/store/reducer';
import { ADD_TO_CART, REMOVE_FROM_CARD } from '@/store/type';

const About = () => {
  const [state, dispatch] = useReducer(reducer, 5);
  return (
    <div>
      <Header title="header title" />
      <div className="container">
        <h2>Cart</h2>
        <div className="flex items-center gap-5 w-max mx-auto">
          <button
            type="button"
            onClick={() => dispatch({ type: ADD_TO_CART })}
            className="bg-green-600 text-white rounded-lg px-6 py-4">
            +
          </button>
          <span className="text-xl">{state}</span>
          <button
            type="button"
            className="bg-red-600 text-white rounded-lg px-6 py-4"
            onClick={() => dispatch({ type: REMOVE_FROM_CARD })}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
