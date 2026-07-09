import { useState } from "react";

const ProductCard = ({ id, img, name, price, description, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const currentQuantity = Number(e.target.value);
    setQuantity(currentQuantity);
  };

  return (
    <div className="flex flex-row m-3 w-md h-auto">
      <img className="w-40 h-fit" src={img}></img>
      <div className="flex flex-col ml-2">
        <h3 className="mb-2 text-xl">{name}</h3>
        <p className="mb-2">Price: {price}</p>
        <p className="mb-5">{description}</p>
        <div className="flex flex-row mb-2">
          <p>Quantity: </p>
          <input
            type="number"
            className=""
            value={quantity}
            onChange={handleQuantityChange}
          ></input>
        </div>
        <button
          className="align-center mb-2"
          onClick={() => addToCart(id, quantity)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
