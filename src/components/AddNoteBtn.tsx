import type { AddNoteBtnProps } from "../types/AddNoteBtnProps";
export function AddNoteBtn({ handleOpen }: AddNoteBtnProps) {
  return (
    <div className="flex justify-end mt-auto">
      <button
        className="bg-purple p-3.5 rounded-full hover:bg-dark-purple [box-shadow:0_0_9px_rgba(108,99,255,0.5)] transition-all duration-300"
        onClick={handleOpen}
      >
        <svg className="w-6 h-6 text-white">
          <use href="/src/assets/icons/sprite.svg#plus-icon" />
        </svg>
      </button>
    </div>
  );
}
