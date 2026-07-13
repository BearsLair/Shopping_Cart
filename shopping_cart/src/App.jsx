import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";

function App() {
  const { page } = useParams();

  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");

  const updateTotal = (cart) => {
    let newTotal = 0;

    for (let i = 0; i < cart.length; i++) {
      for (let k = 1; k < cart[i].quantity + 1; k++) {
        newTotal += Math.round(cart[i].price * 100);
      }
    }
    setTotal((newTotal / 100).toFixed(2));
  };

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

        updateTotal(shoppingCartCopy);
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

    updateTotal(cartCopy);
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
      updateTotal(cartCopy);
    } else if (incrementOrDecrement === "decrement") {
      cartCopy[index].quantity -= 1;
      setShoppingCart(cartCopy);
      updateTotal(cartCopy);
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
            <Link className="text-2xl mr-5" to={"/products"}>
              Items for Sale
            </Link>
          </div>
          <Link className="text-2xl mr-5" to={"/cart"}>
            {page === "cart" ? "Checkout (Disabled)" : "Shopping Cart"}
          </Link>
        </div>
        <hr />
      </nav>
      {page === "products" ? (
        <ProductsList products={products} addToCart={handleAddToCart} />
      ) : page === "cart" ? (
        <Cart
          shoppingCart={shoppingCart}
          handleDelete={handleDeleteItem}
          updateQuantity={handleUpdateQuantity}
          total={total}
        />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
