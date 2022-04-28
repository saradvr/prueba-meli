import classNames from "classnames";
import { bool, oneOf, string } from "prop-types";
import React from "react";
import { InputProps, InputTypes } from "./Input-types";
import "./Input.scss";

const InputTypes_PropTypes = oneOf(Object.values(InputTypes) as InputTypes[]);

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, required, addClass }: InputProps, ref) => {
    const classes = classNames("input", `input-${type}`, addClass);
    return (
      <input
        className={classes}
        placeholder={placeholder}
        ref={ref}
        required={required}
      />
    );
  }
);

Input.defaultProps = {
  type: InputTypes.Default,
  placeholder: "",
  required: false,
  addClass: "",
};

Input.propTypes = {
  // indicates if is a special type of input (for styles)
  type: InputTypes_PropTypes,
  // indicates if the input is a required field or not
  required: bool,
  // text to show as guide for the user inside the input
  placeholder: string,
  // additional class for the Input
  addClass: string,
};
