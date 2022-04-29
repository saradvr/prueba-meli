import { SyntheticEvent } from "react";

export type ButtonProps = {
  type?: ButtonTypes;
  variety?: ButtonVarieties;
  text: string;
  click?: (e?: SyntheticEvent) => unknown;
  addClass?: string;
};

export enum ButtonVarieties {
  Primary = "primary",
}

export enum ButtonTypes {
  Submit = "submit",
  Button = "button",
  Reset = "reset",
}
