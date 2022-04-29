import { Link } from "react-router-dom";
import "./NotFound.scss";

export const NotFound = () => (
  <div className="not-found">
    La página que buscas no fue encontrada, busca un producto o vuelve al{" "}
    <Link to="/">Inicio</Link>
  </div>
);
