import CartItem from "./CartItem";

const Cart = ({ shoppingCart, handleDelete, updateQuantity, total }) => {
  return (
    <div className="w-3/4">
      <h1 className="text-center">Your Cart</h1>
      <CartItem name="Item" quantity="Quantity" price="Price" />
      <ul className="mt-5 mb-5">
        {shoppingCart.map((item) => {
          return (
            <li key={item.id}>
              <CartItem
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                handleDelete={handleDelete}
                updateQuantity={updateQuantity}
              />
            </li>
          );
        })}
      </ul>
      <p>
        Total: <span>${total}</span>
      </p>
      <button>Proceed to Checkout (Disabled)</button>
    </div>
  );
};

export default Cart;
