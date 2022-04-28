import classNames from "classnames";
import React from "react";
import { InputProps, InputTypes } from "./Input-types";
import "./Input.scss";

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
