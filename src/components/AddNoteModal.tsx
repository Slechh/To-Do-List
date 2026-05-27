import { useState, useEffect, useRef } from "react";

import { NoteFormModal } from "./NoteFormModal";

import type { AddNoteModalProps } from "../types/AddNoteModalProps";

export function AddNoteModal({
  isModalOpen,
  inputValue,
  setInputValue,
  handleClose,
  createNote,
}: AddNoteModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const valueRef = useRef(inputValue);

  useEffect(() => {
    valueRef.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    const handleKeyClose = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === "Enter") {
        e.preventDefault();
        setIsSubmitted(true);
        if (valueRef.current.trim()) {
          createNote(valueRef.current);
        }
        return;
      }

      if (e.key === "Escape") {
        handleClose();
        setIsSubmitted(false);
      }
    };

    document.addEventListener("keydown", handleKeyClose);
    return () => document.removeEventListener("keydown", handleKeyClose);
  }, [handleClose, createNote, isModalOpen]);

  return (
    <NoteFormModal
      title="NEW NOTE"
      submitText="APPLY"
      isOpen={isModalOpen}
      inputValue={inputValue}
      onChange={setInputValue}
      onClose={handleClose}
      onSubmit={() => createNote(inputValue)}
      showErr={isSubmitted}
      setShowErr={setIsSubmitted}
    />
  );
}
