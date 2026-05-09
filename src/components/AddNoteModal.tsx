import type { AddNoteModalProps } from "../types/AddNoteModalProps";
import { useEffect } from "react";
import { NoteFormModal } from "./NoteFormModal";

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
    <NoteFormModal
      title="NEW NOTE"
      submitText="APPLY"
      isOpen={isModalOpen}
      inputValue={inputValue}
      onChange={setInputValue}
      onClose={handleClose}
      onSubmit={() => createNote(inputValue)}
    />
  );
}
