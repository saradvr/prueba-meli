import { Link } from "react-router-dom";
import { Helmet } from "../../components/page/Helmet/Helmet";
import "./NotFound.scss";
import logo from "../../styles/foundation/images/Logo_ML@2x.png";

export const NotFound = () => (
  <>
    <Helmet
      title="No encontrada - Prueba de ingreso a MELI"
      description="La página que estabas buscando no pudo ser encontrada"
      image={logo}
      url="*"
      h1="Página no encontrada"
    />
    <div className="not-found">
      La página que buscas no fue encontrada, busca un producto o vuelve al{" "}
      <Link to="/">Inicio</Link>
    </div>
  </>
);
