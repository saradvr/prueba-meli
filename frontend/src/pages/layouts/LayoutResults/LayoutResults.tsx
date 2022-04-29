import classNames from "classnames";
import { Outlet, useParams } from "react-router-dom";
import { Breadcrumbs } from "../../../components/core/links/Breadcrumbs";
import { RootState } from "../../../store";
import { useAppSelector } from "../../../store/hooks";
import { ProductType, SearchResult } from "../../../store/product-types";
import "./LayoutResults.scss";

export const LayoutResults = (): React.ReactElement => {
  const classes = classNames("results-layout", "grid");
  const { id } = useParams();
  let categories;

  const product: ProductType = useAppSelector(
    (state: RootState) => state.product.product
  );
  const products: SearchResult = useAppSelector(
    (state: RootState) => state.product.products
  );

  id ? (categories = product.categories) : (categories = products.categories);

  return (
    <div className={classes}>
      {categories && <Breadcrumbs categories={categories} />}
      <Outlet />
    </div>
  );
};
