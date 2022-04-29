import classNames from "classnames";
import { func, oneOf } from "prop-types";
import { string } from "prop-types";
import { ButtonProps, ButtonTypes, ButtonVarieties } from "./Button-types";
import "./Button.scss";

const ButtonVarieties_Proptypes = oneOf(
  Object.values(ButtonVarieties) as ButtonVarieties[]
);

const ButtonTypes_Proptypes = oneOf(
  Object.values(ButtonTypes) as ButtonTypes[]
);

export const Button = ({
  type,
  variety,
  text,
  click,
  addClass,
}: ButtonProps): React.ReactElement => {
  const classes = classNames("btn", `btn-${variety}`, addClass);
  return (
    <button className={classes} onClick={click} type={type}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: ButtonTypes.Button,
  variety: ButtonVarieties.Primary,
  addClass: "",
};

Button.propTypes = {
  // One of the ButtonTypes that is defined in the types file.
  type: ButtonTypes_Proptypes,
  // One of the ButtonVarieties that is defined in the types file.
  variety: ButtonVarieties_Proptypes,
  // text to show inside the button
  text: string.isRequired,
  // Function to execute on click
  click: func.isRequired,
  // Aditional class to add to the component
  addClass: string,
};
