import { createContext, useEffect, useReducer } from 'react';
import { reducer } from '@/store/reducer';
import {
  ADD_ONE,
  ADD_TO_CART,
  REMOVE_FROM_CARD,
  REMOVE_ONE,
} from '@/store/type';

export const MainContext = createContext(null);

export function MainContextProvider({ children }) {
  const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (data) => dispatch({ type: ADD_TO_CART, payload: data });
  const removeFromCart = (id) =>
    dispatch({ type: REMOVE_FROM_CARD, payload: id });

  const addOne = (id) => dispatch({ type: ADD_ONE, payload: id });

  const removeOne = (id) => dispatch({ type: REMOVE_ONE, payload: id });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <MainContext.Provider
      value={{
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        cartItems: state.cartItems,
        addOne: addOne,
        removeOne: removeOne,
      }}>
      {children}
    </MainContext.Provider>
  );
}
