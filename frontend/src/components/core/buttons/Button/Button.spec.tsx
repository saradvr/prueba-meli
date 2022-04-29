import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

const mockClick = jest.fn();

describe("IconButton test", () => {
  it("should render", () => {
    render(<Button click={mockClick} text="Comprar" />);
    screen.getByText("Comprar");
  });
  it("should execute click function", () => {
    render(<Button click={mockClick} text="Comprar" />);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(mockClick).toBeCalled();
  });
});
