import type { AddNoteBtnProps } from "../types/AddNoteBtnProps";

export function AddNoteBtn({ handleOpen }: AddNoteBtnProps) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4">
      <div className="flex justify-end">
        <button
          className="bg-purple p-3.5 rounded-full hover:bg-dark-purple [box-shadow:0_0_9px_rgba(108,99,255,0.5)] transition-colors duration-300"
          onClick={handleOpen}
        >
          <svg className="w-6 h-6 text-white">
            <use href="/icons/sprite.svg#plus-icon" />
          </svg>
        </button>
      </div>
    </div>
  );
}
