import { useEffect, useRef } from "react";

import { NoteFormModal } from "./NoteFormModal";
import { toast } from "sonner";
import type { AddNoteModalProps } from "../types/AddNoteModalProps";

export function AddNoteModal({
  isModalOpen,
  inputValue,
  setInputValue,
  handleClose,
  createNote,
}: AddNoteModalProps) {
  const valueRef = useRef(inputValue);

  useEffect(() => {
    valueRef.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    const handleKeyClose = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === "Enter") {
        e.preventDefault();
        if (valueRef.current.trim()) {
          createNote(valueRef.current);
        } else {
          toast.error("Please enter at least 1 character!", {
            duration: 3000,
            id: "empty-input",
          });
        }
        return;
      }

      if (e.key === "Escape") {
        handleClose();
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
    />
  );
}
