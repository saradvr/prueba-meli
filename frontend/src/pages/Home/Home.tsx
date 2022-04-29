import { Helmet } from "../../components/page/Helmet/Helmet";
import logo from "../../styles/foundation/images/Logo_ML@2x.png";

export const Home = () => {
  return (
    <Helmet
      title="Home - Prueba de ingreso a MELI"
      description="Esta es una prueba de ingreso, no tiene ninguna relación directa con la página de MELI"
      image={logo}
      url="/"
      h1="Página de inicio para la búsqueda"
    />
  );
};
