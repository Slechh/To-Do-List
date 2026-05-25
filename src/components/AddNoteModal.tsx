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
      if (e.key === "Escape") {
        handleClose();
        setIsSubmitted(false);
      }

      if (e.key === "Enter" && valueRef.current.trim()) {
        createNote(valueRef.current);
      }
    };

    window.addEventListener("keydown", handleKeyClose);
    return () => window.removeEventListener("keydown", handleKeyClose);
  }, [handleClose, createNote]);

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
