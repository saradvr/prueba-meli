import { render, screen } from "@testing-library/react";
import { ProductImage } from "./ProductImage";
import { ProductImageTypes } from "./ProductImage-types";

describe("ProductImage test", () => {
  it("should render", () => {
    render(
      <ProductImage
        image="https://http2.mlstatic.com/D_NQ_NP_889109-MLA48025306707_102021-V.webp"
        altImage="Teclado bluetooth"
        type={ProductImageTypes.CardResult}
      />
    );
    screen.getByAltText("Teclado bluetooth");
  });
});
