import classNames from "classnames";
import { Outlet, useParams, useSearchParams } from "react-router-dom";
import { Breadcrumbs } from "../../../components/core/links/Breadcrumbs";
import { Helmet } from "../../../components/page/Helmet/Helmet";
import { RootState } from "../../../store";
import { useAppSelector } from "../../../store/hooks";
import { ProductType, SearchResult } from "../../../store/product-types";
import logo from "../../../styles/foundation/images/Logo_ML@2x.png";
import "./LayoutResults.scss";

export const LayoutResults = (): React.ReactElement => {
  const classes = classNames("results-layout", "grid");
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  let categories;

  const product: ProductType = useAppSelector(
    (state: RootState) => state.product.product
  );
  const products: SearchResult = useAppSelector(
    (state: RootState) => state.product.products
  );

  id ? (categories = product.categories) : (categories = products.categories);

  return (
    <>
      <Helmet
        title={`${
          id ? "Página de detalles de producto" : "Resultados de la búsqueda"
        } - Prueba de ingreso a MELI`}
        description={
          id
            ? "Esta es la página de detalle del producto, la cual contiene la descripción y los detalles del producto de interés"
            : "Aquí están los resultados de la búsqueda del producto de tu interés."
        }
        image={logo}
        url={
          id ? `/items/${id}` : `/items?search?${searchParams.get("search")}`
        }
        h1={
          id
            ? "Página de detalles del producto"
            : "Página de resultados de búsqueda"
        }
      />
      <div className={classes}>
        {categories && <Breadcrumbs categories={categories} />}
        <Outlet />
      </div>
    </>
  );
};
