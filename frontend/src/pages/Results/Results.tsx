import classNames from "classnames";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ResultCard } from "../../components/content/ResultCard";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ProductType, SearchResult } from "../../store/product-types";
import { getProducts } from "../../store/productReducer";
import { ResultsProps } from "./Results-types";

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

  if (loading) return <div>Cargando...</div>;

  return (
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
  );
};
