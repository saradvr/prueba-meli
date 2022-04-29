import classNames from "classnames";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/core/buttons/Button";
import {
  ProductImage,
  ProductImageTypes,
} from "../../components/core/images/ProductImage";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ProductType } from "../../store/product-types";
import { getProduct } from "../../store/productReducer";
import { ProductDetailProps } from "./ProductDetail-types";
import shippingImg from "../../styles/foundation/images/ic_shipping.png";
import "./ProductDetail.scss";

export const ProductDetail = ({
  addClass,
}: ProductDetailProps): React.ReactElement => {
  const { id } = useParams();
  const product: ProductType = useAppSelector(
    (state: RootState) => state.product.product
  );
  const loading: boolean = useAppSelector(
    (state: RootState) => state.product.loading
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProduct(id ? id : ""));
  }, [dispatch]);

  const classes = classNames("product-detail", addClass);

  const {
    picture,
    title,
    condition,
    sold_quantity,
    price,
    description,
    free_shipping,
  } = product;

  if (loading) return <div>Cargando...</div>;

  return (
    <div className={classes}>
      <section className="product-info">
        <p className="info">
          {condition === "new" ? "Nuevo" : "Usado"} - {sold_quantity} vendidos
        </p>
        <h1 className="title">{title}</h1>
        <section className="price">
          {`$ `}
          {price &&
            price.currency &&
            price.amount &&
            new Intl.NumberFormat("de-DE").format(price.amount)}
          {free_shipping ? (
            <img
              className="img-free-shipping"
              src={shippingImg}
              alt="free-shipping-icon"
            />
          ) : (
            ""
          )}
        </section>
        {/* eslint-disable-next-line no-console */}
        <Button text="Comprar" click={() => console.log("Proceso de compra")} />
      </section>
      <section className="product-image">
        <ProductImage
          image={picture}
          altImage={title}
          type={ProductImageTypes.ProductDetails}
        />
      </section>
      <section className="description-section">
        <h2 className="description-title">Descripción del producto</h2>
        <p className="description">{description}</p>
      </section>
    </div>
  );
};
