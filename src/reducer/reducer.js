import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === REMOVE) {
    const newCart = state.cart.filter((item) => item.id != action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    const cartItem = state.cart.find((e) => e.id == action.payload.id);
    cartItem.amount = cartItem.amount + 1;

    return { ...state };
  }
  if (action.type === DECREASE) {
    const cartItem = state.cart.find((e) => e.id == action.payload.id);
    if (cartItem.amount === 1) {
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: newCart };
    }
    cartItem.amount = cartItem.amount - 1;

    return { ...state };
  }
  return new Error(`there is no such type of action with name: ${action.type}`);
};

export default reducer;
