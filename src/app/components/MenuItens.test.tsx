import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuItens from "./MenuItens";
import { describe } from "node:test";

describe("MenuItens Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<MenuItens />);
    expect(container).toBeInTheDocument();
  });

  it("contains Home link", () => {
    const { getByText } = render(<MenuItens />);
    expect(getByText("Home")).toBeInTheDocument();
  });

  it("contains Conhecimentos link", () => {
    const { getByText } = render(<MenuItens />);
  })
})

// test('sum', () => {
//     expect(1 + 1).toBe(2);
// })