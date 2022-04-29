import classNames from "classnames";
import { oneOf, string } from "prop-types";
import { ProductImageProps, ProductImageTypes } from "./ProductImage-types";
import "./ProductImage.scss";

const ProductImageTypes_PropTypes = oneOf(
  Object.values(ProductImageTypes) as ProductImageTypes[]
);

export const ProductImage = ({
  image,
  altImage,
  addClass,
  type,
}: ProductImageProps) => {
  const classes = classNames(
    "product-image",
    `product-image-${type}`,
    addClass
  );
  return <img className={classes} src={image} alt={altImage} />;
};

ProductImage.defaultProps = {
  addClass: "",
};

ProductImage.propTypes = {
  // image url to show
  image: string.isRequired,
  // alt text for the image
  altImage: string.isRequired,
  // type of image to show for the product
  type: ProductImageTypes_PropTypes.isRequired,
  // Additional class for the component
  addClass: string,
};
