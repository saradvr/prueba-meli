import classNames from "classnames";
import { func, oneOf } from "prop-types";
import { string } from "prop-types";
import { IconButtonProps, IconButtonTypes } from "./IconButton-types";
import "./IconButton.scss";

const IconButtonPropTypes = oneOf(
  Object.values(IconButtonTypes) as IconButtonTypes[]
);

export const IconButton = ({
  type,
  iconUrl,
  altIcon,
  click,
  addClass,
}: IconButtonProps): React.ReactElement => {
  const classes = classNames("btn-icon", `btn-icon-${type}`, addClass);
  return (
    <button className={classes} onClick={click}>
      <img src={iconUrl} alt={altIcon} />
    </button>
  );
};

IconButton.defaultProps = {
  addClass: "",
};

IconButton.propTypes = {
  // One of the IconButtonTypes that is defined in the types file.
  type: IconButtonPropTypes.isRequired,
  // Source for the icon, that could be external or a local image import
  iconUrl: string.isRequired,
  // Alt property for the image or icon
  altIcon: string.isRequired,
  // Function to execute on click
  click: func.isRequired,
  // Aditional class to add to the component
  addClass: string,
};
