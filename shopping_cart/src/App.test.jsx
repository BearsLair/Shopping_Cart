import { describe, it, expect, beforeEach } from "vitest";
import { handleAddToCart, handleDeleteItem, handleUpdateQuantity } from "./App";

describe("App component handle functions run as expected", () => {
  beforeEach(() => {
    const ShoppingCart = [
      {
        id: 1,
        name: "First Item",
        quantity: 2,
        price: 12.99,
      },
      {
        id: 2,
        name: "Second Item",
        quantity: 4,
        price: 21.85,
      },
    ];
  });

  it("handleAddToCart adds item id, name, quantity and price to shoppingCart array", () => {});
  it("handleDeleteItem removes correct item from cart", () => {});
  it("handleUpdateQuantity updates the quantity on the correct item only", () => {});
});
