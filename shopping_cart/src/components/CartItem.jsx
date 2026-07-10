const CartItem = ({ id, name, quantity, price, handleDelete }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-5">
      <p>{name}</p>
      <p>{quantity}</p>
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
