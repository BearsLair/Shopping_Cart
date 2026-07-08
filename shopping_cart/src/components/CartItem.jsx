const CartItem = ({ name, quantity, price }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-5">
      <p>{name}</p>
      <p>{quantity}</p>
      <p>${price}</p>
      <button className="">❌</button>
    </div>
  );
};

export default CartItem;
