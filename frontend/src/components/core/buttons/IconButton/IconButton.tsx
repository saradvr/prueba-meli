import classNames from "classnames";
import { func, oneOf } from "prop-types";
import { string } from "prop-types";
import {
  IconButtonProps,
  IconButtonTypes,
  IconButtonVarieties,
} from "./IconButton-types";
import "./IconButton.scss";

const IconButtonVarieties_Proptypes = oneOf(
  Object.values(IconButtonVarieties) as IconButtonVarieties[]
);

const IconButtonTypes_Proptypes = oneOf(
  Object.values(IconButtonTypes) as IconButtonTypes[]
);

export const IconButton = ({
  type,
  variety,
  iconUrl,
  altIcon,
  click,
  addClass,
}: IconButtonProps): React.ReactElement => {
  const classes = classNames("btn-icon", `btn-icon-${variety}`, addClass);
  return (
    <button className={classes} onClick={click} type={type}>
      <img src={iconUrl} alt={altIcon} />
    </button>
  );
};

IconButton.defaultProps = {
  type: IconButtonTypes.Button,
  addClass: "",
};

IconButton.propTypes = {
  //
  type: IconButtonTypes_Proptypes.isRequired,
  // One of the IconButtonTypes that is defined in the types file.
  variety: IconButtonVarieties_Proptypes.isRequired,
  // Source for the icon, that could be external or a local image import
  iconUrl: string.isRequired,
  // Alt property for the image or icon
  altIcon: string.isRequired,
  // Function to execute on click
  click: func,
  // Aditional class to add to the component
  addClass: string,
};
