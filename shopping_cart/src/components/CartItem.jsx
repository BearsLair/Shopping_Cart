const CartItem = ({
  id,
  name,
  quantity,
  price,
  handleDelete,
  updateQuantity,
}) => {
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-5">
      <p>{name}</p>

      {name === "Item" ? (
        <p>"Amount"</p>
      ) : (
        <div className="flex flex-row align-center">
          <p>{quantity}</p>
          <button onClick={() => updateQuantity(id, "increment")}>UP</button>
          <button onClick={() => updateQuantity(id, "decrement")}>DOWN</button>
        </div>
      )}

      <p>${price}</p>
      {name === "Item" ? (
        "Delete?"
      ) : (
        <button className="" onClick={() => handleDelete(id)}>
          ❌
        </button>
      )}
    </div>
  );
};

export default CartItem;
