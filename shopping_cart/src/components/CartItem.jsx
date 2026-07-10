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
        <div className="flex flex-row h-fill justify-center">
          <p className="mr-3 h-fit">{quantity}</p>
          <button
            className="mr-1 h-fit"
            onClick={() => updateQuantity(id, "increment")}
          >
            ⬆️
          </button>
          <button
            className="h-fit"
            onClick={() => updateQuantity(id, "decrement")}
          >
            ⬇️
          </button>
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
