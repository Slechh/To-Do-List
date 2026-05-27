import { useState } from "react";

import { Select } from "./Select";
import { NoteList } from "./NotesList";

import type { TodoHeaderProps } from "../types/TodoHeaderProps";
import type { NoteType } from "../types/NotesProps";
import type { FilterType } from "../types/SelectProps";

import { useThemeStore } from "../store/useThemeStore";
import { useShallow } from "zustand/react/shallow";

export function TodoHeader({
  notes,
  setNotes,
  inputValue,
  setInputValue,
}: TodoHeaderProps) {
  const [inputText, setInputText] = useState("");
  const [value, setValue] = useState<FilterType>("ALL");
  const searchText = inputText.trim().toLowerCase();

  const notesToRender = searchText
    ? notes.filter((note) => note.value.toLowerCase().includes(searchText))
    : notes;

  const filters: Record<FilterType, (notes: NoteType[]) => NoteType[]> = {
    ALL: (notes) => notes,
    COMPLETE: (notes) => notes.filter((note) => note.isCompleted),
    INCOMPLETE: (notes) => notes.filter((note) => !note.isCompleted),
  };

  const filteredNotes = filters[value](notesToRender);

  const { theme, toggleTheme } = useThemeStore(
    useShallow((state) => ({
      theme: state.theme,
      toggleTheme: state.toggleTheme,
    })),
  );

  return (
    <>
      <div className="flex flex-col gap-4.5">
        <h1 className="text-[26px] m-auto font-medium dark:text-white">
          TODO LIST
        </h1>
        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-7.5">
            <div className="relative h-10">
              <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                type="search"
                className="appearance-none w-full h-full border-[1.5px] border-purple rounded-md outline-none placeholder:text-light-lavender placeholder:font-medium font-inter text-purple pl-4 pr-10 focus:ring-2 focus:ring-light-purple dark:border-wild-sand dark:focus:ring-gray 
                dark:placeholder:text-gray transition-all duration-300"
                placeholder="Search note..."
              />
              {searchText && (
                <button type="button" onClick={() => setInputText("")}>
                  <svg className="w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                    <use href="/icons/sprite.svg#cancel-icon" />
                  </svg>
                </button>
              )}
            </div>
            <NoteList
              notesList={filteredNotes}
              setNotes={setNotes}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </div>

          <Select value={value} setValue={setValue} />
          <button
            className="flex items-center gap-7 text-lg text-white bg-purple p-2 rounded-md hover:bg-dark-purple hover:[box-shadow:0_0_9px_rgba(108,99,255,0.5)] transition-all duration-300 h-10"
            type="button"
            onClick={toggleTheme}
          >
            <svg className="w-5.5 h-5.5">
              <use
                href={`/icons/sprite.svg#${theme === "light" ? "moon" : "sun"}-icon`}
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
