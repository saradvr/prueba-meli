import { fireEvent, render, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

const handleSubmit = jest.fn().mockImplementation((e) => e.preventDefault());

describe("SearchBar test", () => {
  it("should render", () => {
    render(<SearchBar handleSubmit={handleSubmit} />);
    screen.getByPlaceholderText("Nunca dejes de buscar");
    screen.getByAltText("Botón de búsqueda");
  });
  it("should submit", async () => {
    render(<SearchBar handleSubmit={handleSubmit} />);
    screen.getByRole("button");
    fireEvent.submit(screen.getByPlaceholderText("Nunca dejes de buscar"));
    expect(handleSubmit).toBeCalledTimes(1);
  });
});
