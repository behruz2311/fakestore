import { ADD_ONE, ADD_TO_CART, REMOVE_FROM_CARD, REMOVE_ONE } from './type';

export function reducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };
    case REMOVE_FROM_CARD:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case ADD_ONE:
      return {
        ...state,
        cartItems: state.cartItems.map((el) =>
          el.id == action.payload
            ? {
                ...el,
                quantity: el.quantity + 1,
              }
            : el
        ),
      };
    case REMOVE_ONE:
      return {
        ...state,
        cartItems: state.cartItems.map((el) =>
          el.id == action.payload
            ? {
                ...el,
                quantity: el.quantity - 1,
              }
            : el
        ),
      };
  }
}
