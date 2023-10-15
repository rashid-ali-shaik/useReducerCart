import CartItem from "./CartItem";
// import cartItems from "../providers/data";
import { useGlobalContext } from "../providers/Provider";
function CartContainer() {
  const { clearCart, cart, amount, totalPrice } = useGlobalContext();
  if (cart.length < 1) {
    return (
      <section className="cart-container">
        <h1
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontSize: "3rem",
            letterSpacing: "2px",
          }}
        >
          Your Bag
        </h1>
        <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontSize: "1rem",
            letterSpacing: "1px",
          }}
        >
          There is nothing in your bag
        </p>
      </section>
    );
  }

  return (
    <>
      <section className="cart-container">
        <h1
          style={{
            textAlign: "center",
            fontSize: "2rem",
            letterSpacing: "2px",
          }}
        >
          Your Bag
        </h1>
        <div className="cart-center">
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
      </section>
      <hr />
      <footer>
        <div className="cart-center">
          <h2 className="total">
            Total
            <span className="price">{totalPrice.toFixed(2)} $</span>
          </h2>
          <div
            style={{
              textAlign: "center",
              marginBottom: "1rem",
              marginTop: "0.5rem",
            }}
          >
            <button className="clear" onClick={() => clearCart()}>
              Clear Cart
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
export default CartContainer;
