import { it, describe, expect, beforeEach } from "vitest";
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

  beforeEach(() => {
    render(<Cart shoppingCart={currentCart} />);
  });

  it("The names of both items should be present", () => {
    expect(screen.getByText("Duffle Bag")).toBeInTheDocument();
    expect(screen.getByText("2TB Disc Drive")).toBeInTheDocument();
  });

  it("Both quantity values should be present", () => {
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("Price for each item should be present", () => {
    expect(screen.getByText("$45.55")).toBeInTheDocument();
    expect(screen.getByText("$75.95")).toBeInTheDocument();
  });
});
