import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { Link, Outlet, Routes, Route, useParams } from "react-router-dom";
import { Header } from "./components/page/Header";
import { RootState } from "./store";
import { getProduct } from "./store/productReducer";
import { ProductType } from "./store/product-types";
import { Results } from "./pages/Results";
import { LayoutResults } from "./pages/layouts/LayoutResults";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const Home = () => {
  return <div></div>;
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
