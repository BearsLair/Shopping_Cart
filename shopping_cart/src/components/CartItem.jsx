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
          <p className="mr-3">{quantity}</p>
          <button
            className="mr-1"
            onClick={() => updateQuantity(id, "increment")}
          >
            ⬆️
          </button>
          <button onClick={() => updateQuantity(id, "decrement")}>⬇️</button>
        </div>
      )}

      <p>${price}</p>
      {name === "Item" ? (
        "Delete from Cart"
      ) : (
        <button className="m-0 p-0 w-fit" onClick={() => handleDelete(id)}>
          🗑️
        </button>
      )}
    </div>
  );
};

export default CartItem;
