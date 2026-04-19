import type { SelectOptionProps } from "./SelectProps";

export type SelectItemProps = {
  option: SelectOptionProps;
  setValue: (value: string) => void;
  setIsOpen: (value: boolean) => void;
};
