import { render, screen } from "@testing-library/react";
import { Input } from "./Input";
import { InputTypes } from "./Input-types";

describe("Input test", () => {
  const placeHolder = "Nunca dejes de buscar";
  it("should render", () => {
    render(<Input placeholder={placeHolder} type={InputTypes.Search} />);
    screen.getByPlaceholderText(placeHolder);
  });
});
