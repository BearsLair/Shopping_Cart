import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-auto gap-3">
      {products.map((item) => {
        return (
          <ProductCard
            id={item.id}
            img={item.image}
            name={item.title}
            price={item.price}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
