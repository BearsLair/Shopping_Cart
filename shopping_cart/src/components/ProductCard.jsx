const ProductCard = () => {
  return (
    <div className="flex flex-row m-3 w-md h-auto">
      <img className="w-40 h-fit" src="81fPKd-2AYL._AC_SL1500_t.png"></img>
      <div className="flex flex-col ml-2">
        <h3 className="mb-2 text-xl">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h3>
        <p className="mb-2">Price: $109.95</p>
        <p className="mb-5">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday needs.
        </p>
        <div className="flex flex-row mb-2">
          <p>Quantity: </p>
          <input type="number" className=""></input>
        </div>
        <button className="align-center mb-2">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
