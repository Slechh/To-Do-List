import clsx from "clsx";
import type { UiModalProps } from "../types/UiModal";

export function UiModal({ children, isModalOpen, className }: UiModalProps) {
  return (
    <div
      className={clsx(
        `fixed inset-0 z-50 flex items-start justify-center
          bg-black/60 transition-all duration-300`,
        isModalOpen ? "opacity-100 visible" : "opacity-0 invisible",
      )}
    >
      <div
        className={clsx(
          `w-125 mt-29.5 bg-white rounded-2xl py-4.5 px-7.5 
              flex flex-col transition-all duration-1000`,
          isModalOpen ? "scale-100 translate-y-0" : "scale-95 -translate-y-4",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
