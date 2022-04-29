import { SyntheticEvent } from "react";

export type IconButtonProps = {
  type?: IconButtonTypes;
  variety: IconButtonVarieties;
  iconUrl: string;
  altIcon: string;
  click?: (e?: SyntheticEvent) => unknown;
  addClass?: string;
};

export enum IconButtonVarieties {
  Search = "search",
}

export enum IconButtonTypes {
  Submit = "submit",
  Button = "button",
  Reset = "reset",
}
