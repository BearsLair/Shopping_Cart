import Home from "./components/Home";
import ProductList from "./components/ProductsList";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err);
        setError(err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <nav>
        <h1 className="text-6xl mb-10">BearsDen Online Store</h1>
        <div className="flex flex-row justify-between">
          <div>
            <a className="text-2xl ml-2 mr-5" href="#">
              Home
            </a>
            <a className="text-2xl mr-5" href="#">
              Items for Sale
            </a>
          </div>
          <a className="text-2xl mr-5" href="#">
            Shopping Chart
          </a>
        </div>
        <hr />
      </nav>
      <ProductList products={products} />
    </>
  );
}

export default App;
