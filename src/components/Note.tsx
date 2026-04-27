import clsx from "clsx";
import type { NoteItemProps } from "../types/NotesProps";
import { useState, useEffect } from "react";

export function Note({ note, isLast, setNotes }: NoteItemProps) {
  const [isDeletModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isChangeModalOpen, setIsChangeModalOpen] = useState<boolean>(false);

  const [inputCheck, setInputCheck] = useState(note.value);

  const toggleNoteComplete = () => {
    setNotes((prev) =>
      prev.map((item) =>
        item.id === note.id
          ? { ...item, isCompleted: !item.isCompleted }
          : item,
      ),
    );
  };

  const deleteNote = () => {
    setNotes((prev) => prev.filter((item) => item.id !== note.id));
    setIsDeleteModalOpen(false);
  };

  const changeNote = () => {
    setNotes((prev) =>
      prev.map((item) =>
        item.id === note.id ? { ...item, value: inputCheck } : item,
      ),
    );
    setIsChangeModalOpen(false);
  };

  useEffect(() => {
    if (!isDeletModalOpen) return;

    const handleKeyClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDeleteModalOpen(false);
      }
      if (e.key === "Enter") {
        setNotes((prev) => prev.filter((item) => item.id !== note.id));
        setIsDeleteModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyClose);
    return () => window.removeEventListener("keydown", handleKeyClose);
  }, [setIsDeleteModalOpen, setNotes, note.id, isDeletModalOpen]);

  return (
    <>
      <li
        className={clsx(!isLast && "border-b border-purple/50 pb-3.5 mb-3.5")}
      >
        <label>
          <input
            onChange={toggleNoteComplete}
            type="checkbox"
            className="hidden"
            checked={note.isCompleted}
          />
          <div className="flex justify-between items-center gap-3.5">
            <div className="flex gap-4 items-center min-w-0">
              <div
                className={clsx(
                  note.isCompleted && "bg-purple",
                  "w-6.5 h-6.5 border border-purple rounded-xs shrink-0 flex items-center justify-center transition-all duration-300",
                )}
              >
                {note.isCompleted && (
                  <svg className="w-4 h-4 text-white">
                    <use href="/src/assets/icons/sprite.svg#check-icon" />
                  </svg>
                )}
              </div>

              <p className="text-xl font-medium wrap-anywhere min-w-0">
                {note.value}
              </p>
            </div>

            <div className="flex gap-2.5 shrink-0">
              <button onClick={() => setIsChangeModalOpen(true)}>
                <svg className="w-4.5 h-4.5 text-gray-300">
                  <use href="/src/assets/icons/sprite.svg#edit-icon" />
                </svg>
              </button>
              <button onClick={() => setIsDeleteModalOpen(true)}>
                <svg className="w-4.5 h-4.5 text-gray-300">
                  <use href="/src/assets/icons/sprite.svg#delete-icon" />
                </svg>
              </button>
            </div>
          </div>
        </label>
      </li>
      <div
        className={`fixed inset-0 z-50 flex items-start justify-center
          bg-black/60 transition-all duration-300
        ${isDeletModalOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div
          className={`w-125 h-50 mt-29.5 bg-white rounded-2xl py-4.5 px-7.5 
              flex flex-col transition-all duration-1000
            ${isDeletModalOpen ? "scale-100 translate-y-0" : "scale-95 -translate-y-4"}`}
        >
          <h2 className="text-2xl flex justify-center font-medium">
            DELETE NOTE
          </h2>
          <div className="mt-2.5">
            Are you sure you want to delete note:{" "}
            <span className="text-purple text-xl">{note.value}</span>?
          </div>
          <div className="mt-auto flex justify-between text-lg font-medium h-9.5">
            <button
              onClick={() => setIsDeleteModalOpen(false)}
              className="flex items-center text-purple border-[1.5px] border-purple px-5 py-0.75 rounded-md hover:bg-purple/40 hover:text-white transition-all duration-300"
            >
              CANCEL
            </button>

            <button
              onClick={() => deleteNote()}
              className="flex items-center bg-purple text-white px-5 py-0.75 rounded-md hover:bg-dark-purple hover:[box-shadow:0_0_9px_rgba(108,99,255,0.5)] transition-all duration-200"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-50 flex items-start justify-center
          bg-black/60 transition-all duration-300
        ${isChangeModalOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div
          className={`w-125 h-72.25 mt-29.5 bg-white rounded-2xl py-4.5 px-7.5 
              flex flex-col transition-all duration-1000
            ${isChangeModalOpen ? "scale-100 translate-y-0" : "scale-95 -translate-y-4"}`}
        >
          <h2 className="text-2xl flex justify-center font-medium">
            CHANGE NOTE
          </h2>
          <div className="relative h-8 mt-5.5">
            <input
              value={inputCheck}
              onChange={(e) => {
                console.log(e.target.value);
                setInputCheck(e.target.value);
              }}
              type="search"
              className="appearance-none w-full h-full border-[1.5px] border-purple rounded-md outline-none placeholder:text-light-lavender placeholder:font-medium font-inter text-purple px-4 focus:ring-2 focus:ring-light-purple transition-all duration-300"
              placeholder="Input your note..."
            />
          </div>

          <div className="mt-auto flex justify-between text-lg font-medium h-9.5">
            <button
              className="flex items-center text-purple border-[1.5px] border-purple px-5 py-0.75 rounded-md hover:bg-purple/40 hover:text-white transition-all duration-300"
              onClick={() => setIsChangeModalOpen(false)}
            >
              CANCEL
            </button>

            <button
              onClick={() => changeNote()}
              className="flex items-center bg-purple text-white px-5 py-0.75 rounded-md hover:bg-dark-purple hover:[box-shadow:0_0_9px_rgba(108,99,255,0.5)] transition-all duration-200"
            >
              CHANGE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
