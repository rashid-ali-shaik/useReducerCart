import { useContext, createContext, useReducer } from "react";
import { reducer, initialState } from "../reducer";
import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "../reducer/actions";
const AppContext = createContext();

// gets totalAmount and cartAmount
const getTotal = (state) => {
  let amount = 0;
  let totalPrice = 0;
  state.map((item) => {
    amount += item.amount;

    totalPrice += amount * item.price;
  });
  return { amount, totalPrice };
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { amount, totalPrice } = getTotal(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };
  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        increase,
        remove,
        decrease,
        amount,
        totalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
