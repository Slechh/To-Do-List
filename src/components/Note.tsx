import clsx from "clsx";
import type { NoteItemProps } from "../types/Notes";

export function Note({ note, isLast }: NoteItemProps) {
  return (
    <li
      className={clsx(!isLast && 'border-b border-purple/50 pb-3.5 mb-3.5')}
    >
      <label>
        <input type="checkbox" className="hidden" />
        <div className="flex justify-between items-center gap-3.5">
          <div className="flex gap-4 items-center min-w-0">
            <div className="w-6.5 h-6.5 border border-purple rounded-xs hover:bg-purple/10 shrink-0" />
            <p className="text-xl font-medium wrap-anywhere min-w-0">
              {note.value}
            </p>
          </div>

          <div className="flex gap-2.5 shrink-0">
            <button>
              <svg className="w-4.5 h-4.5 text-gray-300">
                <use href="/src/assets/icons/sprite.svg#edit-icon" />
              </svg>
            </button>
            <button>
              <svg className="w-4.5 h-4.5 text-gray-300">
                <use href="/src/assets/icons/sprite.svg#delete-icon" />
              </svg>
            </button>
          </div>
        </div>
      </label>
    </li>
  );
}
