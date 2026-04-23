import type { Notes } from "../types/Notes";

export function Note({ notes }: Notes) {
  return notes.map((note, index) => (
    <li key={note.id}>
      <label>
        <input type="checkbox" className="hidden" />
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="w-6.5 h-6.5 border border-purple rounded-xs hover:bg-purple/10 shrink-0" />
            <p className="text-xl font-medium wrap-anywhere pr-2 min-w-0">
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
      {notes.length - 1 !== index && (
        <div className="h-px w-full bg-purple/50 my-3.5" />
      )}
    </li>
  ));
}
