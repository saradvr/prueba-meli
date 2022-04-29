import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";

const mockCategories = ["Apple", "Celulares", "iPhone"];

describe("Breadcrumbs test", () => {
  it("should render categories", () => {
    render(<Breadcrumbs categories={mockCategories} />, {
      wrapper: MemoryRouter,
    });
    screen.getByText("Apple");
    screen.getByText("Celulares");
    screen.getByText("iPhone");
  });
  it("should render", () => {
    render(<Breadcrumbs categories={[]} />, {
      wrapper: MemoryRouter,
    });
    expect(screen.queryByText("Apple")).toBe(null);
  });
});
