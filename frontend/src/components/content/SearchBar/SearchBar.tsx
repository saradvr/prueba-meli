import { useRef } from "react";
import classNames from "classnames";
import {
  IconButton,
  IconButtonTypes,
  IconButtonVarieties,
} from "../../core/buttons/IconButton";
import { Input, InputTypes } from "../../core/forms/Input";
import { SearchBarProps } from "./SearchBar-types";
import iconSearch from "../../../styles/foundation/images/ic_Search.png";
import { string } from "prop-types";
import { useNavigate } from "react-router-dom";
import "./SearchBar.scss";

export const SearchBar = ({ addClass }: SearchBarProps): React.ReactElement => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    navigate(`/items?search=${inputRef.current!.value}`);
  };

  const classes = classNames("search-bar", addClass);

  return (
    <form className={classes} onSubmit={handleSubmit}>
      <label
        htmlFor="input-busqueda"
        id="label-search"
        style={{ display: "none" }}
      >
        Ingresa un producto para buscar
      </label>
      <Input
        id="input-search"
        ref={inputRef}
        placeholder="Nunca dejes de buscar"
        type={InputTypes.Search}
        ariaLabelledby="label-search"
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

SearchBar.defaultProps = {
  addClass: "",
};

SearchBar.propTypes = {
  // additional class to add to the SearchBar
  addClass: string,
};
