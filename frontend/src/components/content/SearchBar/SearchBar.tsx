import { useRef } from "react";
import classNames from "classnames";
// import { useNavigate } from "react-router-dom";
import {
  IconButton,
  IconButtonTypes,
  IconButtonVarieties,
} from "../../core/buttons/IconButton";
import { Input, InputTypes } from "../../core/forms/Input";
import { SearchBarProps } from "./SearchBar-types";
import iconSearch from "../../../styles/foundation/icons/ic_Search.png";
import { func, string } from "prop-types";

export const SearchBar = ({
  handleSubmit,
  addClass,
}: SearchBarProps): React.ReactElement => {
  // const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (inputRef.current) {
  //     navigate(`/items?search=${inputRef.current.value}`);
  //   }
  // };

  const classes = classNames("search-bar", addClass);

  return (
    <form className={classes} onSubmit={handleSubmit}>
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

SearchBar.defaultProps = {
  addClass: "",
};

SearchBar.propTypes = {
  // function to execute when submit
  handleSubmit: func.isRequired,
  // additional class to add to the SearchBar
  addClass: string,
};
