import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import {
  Link,
  Outlet,
  Routes,
  Route,
  useSearchParams,
  useParams,
} from "react-router-dom";
import { Header } from "./components/page/Header";
import { RootState } from "./store";
import { getProduct, getProducts } from "./store/productReducer";
import { ProductType, SearchResult } from "./store/product-types";
import { Breadcrumbs } from "./components/core/links/Breadcrumbs";
import {
  ProductImage,
  ProductImageTypes,
} from "./components/core/images/ProductImage/";
import { ResultCard } from "./components/content/ResultCard/ResultCard";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const LayoutResults = () => {
  const categories = ["celulares", "apple", "iphone"];
  return (
    <>
      <Breadcrumbs categories={categories} />
      <Outlet />
    </>
  );
};

const Home = () => {
  return <div></div>;
};

const Results = () => {
  const [searchParams] = useSearchParams();
  const products: SearchResult = useAppSelector(
    (state: RootState) => state.product.products
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const searchTerm = searchParams.get("search");
    dispatch(getProducts(searchTerm ? searchTerm : ""));
  }, [dispatch, searchParams]);

  const { items } = products;
  return (
    <>
      <div>Estos son los resultados</div>
      <ul>
        {searchParams.get("search") ? (
          items.map((item: ProductType) => (
            <li key={item.id}>
              <ResultCard product={item} />
            </li>
          ))
        ) : (
          <div>Estos son TODOS nuestros productos</div>
        )}
      </ul>
    </>
  );
};

const Product = () => {
  const { id } = useParams();
  const product: ProductType = useAppSelector(
    (state: RootState) => state.product.product
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProduct(id ? id : ""));
  }, [dispatch]);

  return (
    <>
      <div>
        Este es el detalle del producto {product.id} y {product.title}
      </div>
      <Link to="/items">Volver a resultados</Link>
    </>
  );
};

const NotFound = () => (
  <div>
    La página que buscas no fue encontrada, ve al <Link to="/">Home</Link>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="items" element={<LayoutResults />}>
            <Route index element={<Results />} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
