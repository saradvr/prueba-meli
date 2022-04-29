import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchBar } from "./SearchBar";

describe("SearchBar test", () => {
  it("should render", () => {
    render(<SearchBar />, { wrapper: MemoryRouter });

    screen.getByPlaceholderText("Nunca dejes de buscar");
    screen.getByAltText("Botón de búsqueda");
  });
  // This test is made for coverage purposes
  it("should submit", () => {
    render(<SearchBar />, { wrapper: MemoryRouter });
    const input = screen.getByPlaceholderText("Nunca dejes de buscar");
    fireEvent.submit(input);
  });
});
