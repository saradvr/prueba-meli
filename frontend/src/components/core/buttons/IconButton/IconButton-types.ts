import { SyntheticEvent } from "react";

export type IconButtonProps = {
  type: IconButtonTypes;
  iconUrl: string;
  altIcon: string;
  click: (e?: SyntheticEvent) => unknown;
  addClass?: string;
};

export enum IconButtonTypes {
  Search = "search",
}
