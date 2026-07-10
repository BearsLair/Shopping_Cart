import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");

  const handleAddToCart = (id, quantity) => {
    let shoppingCartCopy = [...shoppingCart];

    let itemToAdd = {};

    products.map((item) => {
      if (item.id === id) {
        itemToAdd = {
          id: item.id,
          name: item.title,
          quantity: quantity,
          price: item.price,
        };

        shoppingCartCopy.push(itemToAdd);

        setShoppingCart(shoppingCartCopy);
      }
    });
  };

  const handleDeleteItem = (id) => {
    let index;

    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].id === id) {
        index = i;
        break;
      }
    }

    const cartCopy = [...shoppingCart];
    cartCopy.splice(index, 1);

    setShoppingCart(cartCopy);
  };

  const handleUpdateQuantity = (id, incrementOrDecrement) => {
    let index = -1;

    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].id === id) {
        index = i;
        break;
      }
    }

    let cartCopy = [...shoppingCart];

    if (
      cartCopy[index].quantity === 1 &&
      incrementOrDecrement === "decrement"
    ) {
      null;
    } else if (incrementOrDecrement === "increment") {
      cartCopy[index].quantity += 1;
      setShoppingCart(cartCopy);
    } else if (incrementOrDecrement === "decrement") {
      cartCopy[index].quantity -= 1;
      setShoppingCart(cartCopy);
    }
  };

  // Fetch data from server ONCE (limit network usage) on site load
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

    // Cleanup function preventing potential race conditions
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
      <ProductsList products={products} addToCart={handleAddToCart} />
      <Cart
        shoppingCart={shoppingCart}
        handleDelete={handleDeleteItem}
        updateQuantity={handleUpdateQuantity}
      />
    </>
  );
}

export default App;
