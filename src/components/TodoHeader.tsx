import { OPTIONS } from "../constants/options";
import { Select } from "./Select";
import { EmptyNote } from "./EmptyNote";
import type { TodoHeaderProps } from "../types/TodoHeaderProps";
import { NoteList } from "./NotesList";

export function TodoHeader({
  notes,
  setNotes,
  inputValue,
  setInputValue,
}: TodoHeaderProps) {
  return (
    <>
      <div className="flex flex-col gap-4.5">
        <h1 className="text-[26px] m-auto font-medium">TODO LIST</h1>
        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-7.5">
            <div className="relative h-10">
              <input
                type="search"
                className="appearance-none w-full h-full border-[1.5px] border-purple rounded-md outline-none placeholder:text-light-lavender placeholder:font-medium font-inter text-purple pl-4 pr-10 focus:ring-2 focus:ring-light-purple transition-all duration-300"
                placeholder="Search note..."
              />
              <button>
                <svg className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2">
                  <use href="/src/assets/icons/sprite.svg#search-icon" />
                </svg>
              </button>
            </div>
            <NoteList
              notesList={notes}
              setNotes={setNotes}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </div>

          <Select options={OPTIONS} />
          <button className="flex items-center gap-7 text-lg text-white bg-purple p-2 rounded-md hover:bg-dark-purple hover:[box-shadow:0_0_9px_rgba(108,99,255,0.5)] transition-all duration-300 h-10">
            <svg className="w-5.5 h-5.5">
              <use href="/src/assets/icons/sprite.svg#moon-icon" />
            </svg>
          </button>
        </div>
      </div>
      {notes.length < 1 && <EmptyNote />}
    </>
  );
}
