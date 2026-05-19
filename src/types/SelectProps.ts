export type FilterType = "ALL" | "COMPLETE" | "INCOMPLETE";

export type SelectOptionProps = {
  value: number;
  label: FilterType;
};

export type SelectProps = {
  value: FilterType;
  setValue: (value: FilterType) => void;
};
