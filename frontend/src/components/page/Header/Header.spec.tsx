import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";

describe("Header test", () => {
  it("should render", () => {
    render(<Header />, { wrapper: BrowserRouter });
    screen.getByAltText("Logo Mercado Libre");
  });
});
