import { it, describe, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "./ProductCard";

describe("ProductCard", () => {
  it("should call addToCart with correct id and quantity when button is clicked", async () => {
    const mockAddToCart = vi.fn();
    const user = userEvent.setup();

    render(
      <ProductCard
        id={1}
        name="Test Product"
        price={100}
        img="test.jpg"
        description="Test description"
        addToCart={mockAddToCart}
      />,
    );

    //Set quantity
    const quantityInput = screen.getByRole("spinbutton");
    await user.clear(quantityInput);
    await user.type(quantityInput, "3");

    //Click add to cart button
    const addToCartButton = screen.getByRole("button", { name: "Add to Cart" });
    await user.click(addToCartButton);

    //Assert
    expect(mockAddToCart).toHaveBeenCalledWith(1, 3);
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });

  it("should call addToCart with quantity 1 when button is clicked without changing quantiy", async () => {
    const mockAddToCart = vi.fn();
    const user = userEvent.setup();

    render(
      <ProductCard
        id={5}
        img="test.jpg"
        name="Another Product"
        price={29.99}
        description="Another Description"
        addToCart={mockAddToCart}
      />,
    );

    const addToCartButton = screen.getByRole("button", {
      name: "Add to Cart",
    });
    await user.click(addToCartButton);

    expect(mockAddToCart).toHaveBeenCalledWith(5, 1);
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });
});
