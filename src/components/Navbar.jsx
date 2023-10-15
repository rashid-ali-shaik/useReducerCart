import { PiShoppingBagBold } from "react-icons/pi";
import { useGlobalContext } from "../providers/Provider";
const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h1>useReducer</h1>
        <div className="nav-container">
          <PiShoppingBagBold className="icon" />
          <div className="amount-container">
            <p className="amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
