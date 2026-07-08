import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "./Cart";

describe("renders CartItem (child) component with correct Cart (parent) data", () => {
  const currentCart = [
    {
      id: 0,
      name: "Duffle Bag",
      quantity: 3,
      price: 45.55,
    },
    {
      id: 1,
      name: "2TB Disc Drive",
      quantity: 2,
      price: 75.95,
    },
  ];

  render(<Cart shoppingCart={currentCart} />);

  const itemName = screen.getByText("Duffle Bag");
  const itemQuantity = screen.getByText("3");
  const itemTotalPrice = screen.getByText("$45.55");

  const itemName2 = screen.getByText("2TB Disc Drive");
  const itemQuantity2 = screen.getByText("2");
  const itemTotalPrice2 = screen.getByText("$75.95");

  it("The names of both items should be present", () => {
    expect(itemName).toBeInTheDocument();
    expect(itemName2).toBeInTheDocument();
  });

  it("Both quantity values should be present", () => {
    expect(itemQuantity).toBeInTheDocument();
    expect(itemQuantity2).toBeInTheDocument();
  });

  it("Both total price values should be present", () => {
    expect(itemTotalPrice).toBeInTheDocument();
    expect(itemTotalPrice2).toBeInTheDocument();
  });
});
