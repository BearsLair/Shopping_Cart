import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-auto gap-3">
      {products.map((item) => {
        return (
          <div key={item.id} className="m-0 p-0">
            <ProductCard
              id={item.id}
              img={item.image}
              name={item.title}
              price={item.price}
              description={item.description}
              addToCart={addToCart}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
