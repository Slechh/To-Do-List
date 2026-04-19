import { useState, useRef, useEffect } from "react";
import type { SelectProps } from "../types/SelectProps";
import clsx from "clsx";

export function Select({ options }: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative w-30" ref={ref}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(
          "flex w-full justify-between items-center text-lg text-white p-2.5  rounded-md  hover:bg-dark-purple hover:[box-shadow:0_0_9px_rgba(108,99,255,0.5)] transition-all duration-300 h-full border-2 border-purple",
          isOpen ? "bg-dark-purple " : "bg-purple",
        )}
      >
        <span className="font-medium text-sm leading-none">
          {value || "ALL"}
        </span>
        <svg
          className={clsx(
            "w-2 h-2 transition-all duration-300",
            isOpen && "rotate-180",
          )}
        >
          <use href="/src/assets/icons/sprite.svg#chevron-icon" />
        </svg>
      </button>
      <div
        className={clsx(
          "absolute z-10 w-full top-full bg-wild-sand border-2 border-purple rounded-md transition-all",
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-1",
        )}
      >
        {options.map((option) => (
          <div
            className="px-1.5 py-1.5 hover:bg-purple/15 cursor-pointer text-purple transition-all duration-300"
            key={option.value}
            onClick={() => {
              setValue(option.label.toUpperCase());
              setIsOpen(false);
            }}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}
