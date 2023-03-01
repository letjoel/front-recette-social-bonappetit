import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing de Home page", () => {
  test("renders learn react link", () => {
    render(<App />);
    const element = screen.getByText(
      /Discover the best chefs & recipes from around the world/i
    );
    expect(element).toBeInTheDocument();
  });
});
