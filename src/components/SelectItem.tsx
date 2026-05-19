import type { SelectItemProps } from "../types/SelectItemProps";
export function SelectItem({ option, onChange, setIsOpen }: SelectItemProps) {
  return (
    <div
      className="px-1.5 py-1.5 hover:bg-purple/15 cursor-pointer text-purple transition-all duration-300"
      onClick={() => {
        onChange(option.label);
        setIsOpen(false);
      }}
    >
      {option.label}
    </div>
  );
}
