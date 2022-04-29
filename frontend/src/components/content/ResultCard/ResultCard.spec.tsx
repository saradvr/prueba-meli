import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ResultCard } from "./ResultCard";

const mockProduct1 = {
  id: "id1",
  title: "iPhone",
  price: {
    currency: "ARD",
    amount: 138513,
  },
  picture:
    "https://http2.mlstatic.com/D_NQ_NP_889109-MLA48025306707_102021-V.webp",
  condition: "new",
  free_shipping: false,
  state: "Buenos Aires",
};

const mockProduct2 = {
  id: "id1",
  title: "iPhone",
  price: {
    currency: "ARD",
    amount: 138513,
  },
  picture:
    "https://http2.mlstatic.com/D_NQ_NP_889109-MLA48025306707_102021-V.webp",
  condition: "used",
  free_shipping: true,
  state: "Buenos Aires",
};

describe("ResultCard test", () => {
  it("should render", () => {
    render(<ResultCard product={mockProduct1} />, { wrapper: MemoryRouter });
    screen.getByText(/iPhone/i);
  });
  it("should render free shipping", () => {
    render(<ResultCard product={mockProduct2} />, { wrapper: MemoryRouter });
    screen.getByAltText("free-shipping-icon");
  });
});
