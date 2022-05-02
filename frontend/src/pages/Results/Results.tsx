import classNames from "classnames";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ProductType, SearchResult } from "../../store/product-types";
import { getProducts } from "../../store/productReducer";
import { ResultsProps } from "./Results-types";

const ResultCard = React.lazy(
  () => import("../../components/content/ResultCard/ResultCard")
);

const Loading = () => <div>Cargando...</div>;

export const Results = ({ addClass }: ResultsProps): React.ReactElement => {
  const [searchParams] = useSearchParams();
  const products: SearchResult = useAppSelector(
    (state: RootState) => state.product.products
  );
  const loading: boolean = useAppSelector(
    (state: RootState) => state.product.loading
  );
  const dispatch = useAppDispatch();
  const classes = classNames("results", addClass);

  useEffect(() => {
    const searchTerm = searchParams.get("search");
    dispatch(getProducts(searchTerm ? searchTerm : ""));
  }, [dispatch, searchParams]);

  const { items } = products;

  if (loading) return <Loading />;

  return (
    <React.Suspense fallback={<Loading />}>
      <div className={classes}>
        {searchParams.get("search") ? (
          items
            .slice(1, 5)
            .map((item: ProductType) => (
              <ResultCard product={item} key={item.id} />
            ))
        ) : (
          <div>No se encontraron productos</div>
        )}
      </div>
    </React.Suspense>
  );
};
