import { useEffect, useRef } from "react";

import { NoteFormModal } from "./NoteFormModal";

import type { AddNoteModalProps } from "../types/AddNoteModalProps";

export function AddNoteModal({
  isModalOpen,
  inputValue,
  setInputValue,
  setIsModalOpen,
  handleClose,
  createNote,
}: AddNoteModalProps) {
  const valueRef = useRef(inputValue);
  useEffect(() => {
    valueRef.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    const handleKeyClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        setInputValue("");
      }

      if (e.key === "Enter" && valueRef.current.trim()) {
        createNote(valueRef.current);
      }
    };

    window.addEventListener("keydown", handleKeyClose);
    return () => window.removeEventListener("keydown", handleKeyClose);
  }, [setIsModalOpen, setInputValue, createNote]);

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
