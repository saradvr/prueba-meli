import { fireEvent, render, screen } from "@testing-library/react";
import { IconButton } from "./IconButton";
import { IconButtonTypes, IconButtonVarieties } from "./IconButton-types";

const iconUrlMock =
  "https://cdn.icon-icons.com/icons2/2469/PNG/512/magnifier_magnifying_glass_icon_149435.png";

const mockClick = jest.fn();

describe("IconButton test", () => {
  it("should render", () => {
    render(
      <IconButton
        iconUrl={iconUrlMock}
        altIcon="Search button"
        click={mockClick}
        variety={IconButtonVarieties.Search}
        type={IconButtonTypes.Button}
      />
    );
    screen.getByAltText("Search button");
  });
  it("should execute click function", () => {
    render(
      <IconButton
        iconUrl={iconUrlMock}
        altIcon="Search button"
        click={mockClick}
        variety={IconButtonVarieties.Search}
        type={IconButtonTypes.Button}
      />
    );
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(mockClick).toBeCalled();
  });
});
