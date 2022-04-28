import React from "react";
import { useRef } from "react";
import {
  Link,
  Outlet,
  Routes,
  Route,
  useSearchParams,
  useParams,
  useNavigate,
} from "react-router-dom";
import {
  IconButton,
  IconButtonTypes,
  IconButtonVarieties,
} from "./components/core/buttons/IconButton";
import { Input, InputTypes } from "./components/core/forms/Input";
import iconSearch from "./styles/foundation/icons/ic_Search.png";

const Search = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current) {
      navigate(`/items?search=${inputRef.current.value}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        placeholder="Nunca dejes de buscar"
        type={InputTypes.Search}
      />
      <IconButton
        type={IconButtonTypes.Submit}
        variety={IconButtonVarieties.Search}
        iconUrl={iconSearch}
        altIcon="Botón de búsqueda"
      />
    </form>
  );
};

const Layout = () => {
  return (
    <>
      <Search />
      <Outlet />
    </>
  );
};

const LayoutResults = () => {
  return (
    <>
      <div>Breadcrumbs</div>
      <Outlet />
    </>
  );
};

const Home = () => <div>MERCADO LIBRE</div>;

const Results = () => {
  const [searchParams] = useSearchParams();
  const resultados = ["iphone", "ipod", "mac"];
  return (
    <>
      <div>Estos son los resultados</div>
      <ul>
        {searchParams.get("search") ? (
          resultados.map((result) => (
            <li key={result}>
              <Link to={result}>{result}</Link>
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
  return (
    <>
      <div>Este es el detalle del producto {id}</div>
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
