import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartItem from "./CartItem";

describe("CartItem", () => {
  it("It displays the name, quantity, and total price of an item", () => {
    const cart = {
      id: 0,
      name: "Duffle Bag",
      quantity: 3,
      price: 45.55,
    };

    render(
      <CartItem name={cart.name} quantity={cart.quantity} price={cart.price} />,
    );

    const itemName = screen.getByText("Duffle Bag");
    const itemQuantity = screen.getByText("3");
    const itemTotalPrice = screen.getByText("$45.55");

    expect(itemName).toBeInTheDocument();
    expect(itemQuantity).toBeInTheDocument();
    expect(itemTotalPrice).toBeInTheDocument();
  });
});
