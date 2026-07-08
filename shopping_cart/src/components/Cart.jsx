import CartItem from "./CartItem";

const Cart = ({ shoppingCart }) => {
  return (
    <div className="w-3/4">
      <h1 className="text-center">Your Cart</h1>
      <ul>
        {shoppingCart.map((item) => {
          console.log(item);
          return (
            <li key={item.id}>
              <CartItem
                name={item.name}
                quantity={item.quantity}
                price={item.price}
              />
            </li>
          );
        })}
      </ul>
      <p>
        Total: <span>$100</span>
      </p>
      <button>Proceed to Checkout (Disabled)</button>
    </div>
  );
};

export default Cart;
