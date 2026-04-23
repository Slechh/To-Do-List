import type { AddNoteModalProps } from "../types/AddNoteModalProps";
import { useEffect } from "react";

export function AddNoteModal({
  isModalOpen,
  inputValue,
  setInputValue,
  setIsModalOpen,
  handleClose,
  createNote,
}: AddNoteModalProps) {
  useEffect(() => {
    const handleKeyClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        setInputValue("");
      }
      if (e.key === "Enter" && inputValue) {
        createNote(inputValue);
      }
      console.log(e.key === "Enter");
    };

    window.addEventListener("keydown", handleKeyClose);
    return () => window.removeEventListener("keydown", handleKeyClose);
  }, [setIsModalOpen, setInputValue, createNote, inputValue]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center
          bg-black/60 transition-all duration-300
        ${isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <div
        className={`w-125 h-72.25 mt-29.5 bg-white rounded-2xl py-4.5 px-7.5 
              flex flex-col transition-all duration-1000
            ${isModalOpen ? "scale-100 translate-y-0" : "scale-95 -translate-y-4"}`}
      >
        <h2 className="text-2xl flex justify-center font-medium">NEW NOTE</h2>
        <div className="relative h-8 mt-5.5">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="search"
            className="appearance-none w-full h-full border-[1.5px] border-purple rounded-md outline-none placeholder:text-light-lavender placeholder:font-medium font-inter text-purple px-4 focus:ring-2 focus:ring-light-purple transition-all duration-300"
            placeholder="Input your note..."
          />
        </div>

        <div className="mt-auto flex justify-between text-lg font-medium h-9.5">
          <button
            className="flex items-center text-purple border-[1.5px] border-purple px-5 py-0.75 rounded-md hover:bg-purple/40 hover:text-white transition-all duration-300"
            onClick={handleClose}
          >
            CANCEL
          </button>

          <button
            onClick={() => createNote(inputValue)}
            className="flex items-center bg-purple text-white px-5 py-0.75 rounded-md hover:bg-dark-purple hover:[box-shadow:0_0_9px_rgba(108,99,255,0.5)] transition-all duration-200"
          >
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
}
