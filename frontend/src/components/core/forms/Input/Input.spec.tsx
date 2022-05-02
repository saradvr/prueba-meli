import { render, screen } from "@testing-library/react";
import { Input } from "./Input";
import { InputTypes } from "./Input-types";

describe("Input test", () => {
  const placeHolder = "Nunca dejes de buscar";
  it("should render", () => {
    render(
      <>
        <label id="label-prueba">Prueba Input</label>
        <Input
          id="input-prueba"
          placeholder={placeHolder}
          type={InputTypes.Search}
          ariaLabelledby="label-prueba"
        />
      </>
    );
    screen.getByPlaceholderText(placeHolder);
  });
});
