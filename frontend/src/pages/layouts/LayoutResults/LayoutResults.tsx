import classNames from "classnames";
import { Outlet } from "react-router-dom";
import { Breadcrumbs } from "../../../components/core/links/Breadcrumbs";
import { RootState } from "../../../store";
import { useAppSelector } from "../../../store/hooks";
import { SearchResult } from "../../../store/product-types";
import "./LayoutResults.scss";

export const LayoutResults = (): React.ReactElement => {
  const classes = classNames("results-layout", "grid");
  const products: SearchResult = useAppSelector(
    (state: RootState) => state.product.products
  );
  const { categories } = products;
  return (
    <div className={classes}>
      <Breadcrumbs categories={categories} />
      <Outlet />
    </div>
  );
};
