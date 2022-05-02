export type InputProps = {
  id: string;
  type?: InputTypes;
  required?: boolean;
  placeholder?: string;
  ariaLabelledby: string;
  addClass?: string;
};

export enum InputTypes {
  Default = "default",
  Search = "search",
}
