import { SearchBar } from "../../content/SearchBar";
import logoMeli from "../../../styles/foundation/images/Logo_ML.png";
import "./Header.scss";
import classNames from "classnames";
import { HeaderProps } from "./Header-types";
import { Link } from "react-router-dom";
import { string } from "prop-types";

export const Header = ({ addClass }: HeaderProps): React.ReactElement => {
  const classes = classNames("header", "grid", addClass);
  return (
    <div className={classes}>
      <Link to="/" className="link-logo">
        <img className="logo-meli" src={logoMeli} alt="Logo Mercado Libre" />
      </Link>
      <SearchBar />
    </div>
  );
};

Header.defaultProps = {
  addClass: "",
};

Header.propTypes = {
  // additional class to add to the SearchBar
  addClass: string,
};
