export type InputProps = {
  type?: InputTypes;
  required?: boolean;
  placeholder?: string;
  addClass?: string;
};

export enum InputTypes {
  Default = "default",
  Search = "search",
}
