import type { SelectItemProps } from "../types/SelectItemProps";
export function SelectItem({ option, setValue, setIsOpen }: SelectItemProps) {
  return (
    <div
      className="px-1.5 py-1.5 hover:bg-purple/15 cursor-pointer text-purple transition-all duration-300"
      onClick={() => {
        setValue(option.label.toUpperCase());
        setIsOpen(false);
      }}
    >
      {option.label}
    </div>
  );
}
