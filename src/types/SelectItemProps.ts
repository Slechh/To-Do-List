import type { SelectOptionProps } from "./SelectProps";
import type { FilterType } from "./SelectProps";

export type SelectItemProps = {
  option: SelectOptionProps;
  onChange: (value: FilterType) => void;
  setIsOpen: (value: boolean) => void;
};
