import { useGlobalContext } from "../providers/Provider";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
function CartItem({ id, title, price, img, amount }) {
  const { remove, increase, decrease } = useGlobalContext();
  return (
    <section className="item-container">
      <img
        src={img}
        className="img
      "
      />
      <div className="details">
        <h3 className="name">{title}</h3>
        <p className="item-price">{price}</p>
        <button className="btn remove-btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div>
        <button className="btn increase-btn" onClick={() => increase(id)}>
          <FiChevronUp />
        </button>
        <span className="item-amount">{amount}</span>
        <button className="btn decrease-btn" onClick={() => decrease(id)}>
          <FiChevronDown />
        </button>
      </div>
    </section>
  );
}
export default CartItem;
