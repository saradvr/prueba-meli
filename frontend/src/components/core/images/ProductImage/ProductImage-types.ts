export type ProductImageProps = {
  image: string;
  altImage: string;
  type: ProductImageTypes;
  addClass?: string;
};

export enum ProductImageTypes {
  CardResult = "result-card",
  ProductDetails = "details",
}
