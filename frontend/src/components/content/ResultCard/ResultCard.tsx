import classNames from "classnames";
import React from "react";
import { ResultCardProps } from "./ResultCard-types";
import {
  ProductImage,
  ProductImageTypes,
} from "../../core/images/ProductImage";
import shippingImg from "../../../styles/foundation/images/ic_shipping.png";
import "./ResultCard.scss";

export const ResultCard = ({
  product,
  addClass,
}: ResultCardProps): React.ReactElement => {
  const classes = classNames("result-card", addClass);
  const { title, condition, price, free_shipping, state, picture } = product;

  return (
    <article className={classes}>
      <section className="image-section">
        <ProductImage
          image={picture}
          altImage={title}
          type={ProductImageTypes.CardResult}
        />
      </section>
      <section className="price-shipping">
        {`$ `}
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: price.currency,
        }).format(price.amount)}
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
      <div className="title">
        {title} {condition === "new" ? "Nuevo" : "Usado"}
      </div>
      <div className="state">{state}</div>
    </article>
  );
};
