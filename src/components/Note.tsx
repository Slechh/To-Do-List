import clsx from "clsx";

import { useState, useEffect, useCallback } from "react";
import { ConfirmModal } from "./ConfirmModal";
import { NoteFormModal } from "./NoteFormModal";

import type { NoteItemProps } from "../types/NotesProps";

export function Note({ note, isLast, setNotes }: NoteItemProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isChangeModalOpen, setIsChangeModalOpen] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const deleteNote = useCallback(() => {
    setNotes((prev) => prev.filter((item) => item.id !== note.id));
    setIsDeleteModalOpen(false);
  }, [note.id, setNotes]);

  const changeNote = useCallback(() => {
    setNotes((prev) =>
      prev.map((item) =>
        item.id === note.id ? { ...item, value: inputCheck.trim() } : item,
      ),
    );
    setIsChangeModalOpen(false);
  }, [note.id, setNotes, inputCheck]);

  useEffect(() => {
    if (!isDeleteModalOpen) return;

    const handleKeyClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDeleteModalOpen(false);
      }
      if (e.key === "Enter") {
        deleteNote();
      }
    };

    window.addEventListener("keydown", handleKeyClose);
    return () => window.removeEventListener("keydown", handleKeyClose);
  }, [setIsDeleteModalOpen, deleteNote, isDeleteModalOpen]);

  useEffect(() => {
    if (!isChangeModalOpen) return;
    const handleKeyClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsChangeModalOpen(false);
        setIsSubmitted(false);
      }
      if (e.key === "Enter") {
        setIsSubmitted(true);
        if (!inputCheck.trim()) return;
        changeNote();
        setIsSubmitted(false);
      }
    };

    window.addEventListener("keydown", handleKeyClose);
    return () => window.removeEventListener("keydown", handleKeyClose);
  }, [isChangeModalOpen, inputCheck, changeNote]);

  return (
    <>
      <li
        className={clsx(
          "group",
          !isLast && "border-b border-purple/50 pb-3.5 mb-3.5",
        )}
      >
        <label htmlFor={note.id}>
          <input
            id={note.id}
            onChange={toggleNoteComplete}
            type="checkbox"
            className="hidden"
            checked={note.isCompleted}
          />
          <div className="flex justify-between items-start gap-3.5">
            <div className="flex gap-4 min-w-0">
              <div
                className={clsx(
                  note.isCompleted && "bg-purple",
                  "w-7 h-7 border border-purple rounded-xs shrink-0 flex items-center justify-center transition-colors duration-300",
                )}
              >
                {note.isCompleted && (
                  <svg className="w-4 h-4 text-white">
                    <use href="/icons/sprite.svg#check-icon" />
                  </svg>
                )}
              </div>

              <p className="text-xl font-medium wrap-anywhere min-w-0 dark:text-white">
                {note.value}
              </p>
            </div>

            <div className="flex gap-2.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => {
                  setInputCheck(note.value);
                  setIsChangeModalOpen(true);
                }}
              >
                <svg className="w-4.5 h-4.5 text-gray-500 dark:text-gray-300">
                  <use href="/icons/sprite.svg#edit-icon" />
                </svg>
              </button>
              <button onClick={() => setIsDeleteModalOpen(true)}>
                <svg className="w-4.5 h-4.5 text-gray-500 dark:text-gray-300">
                  <use href="/icons/sprite.svg#delete-icon" />
                </svg>
              </button>
            </div>
          </div>
        </label>
      </li>
      <ConfirmModal
        note={note}
        onConfirm={deleteNote}
        onClose={() => setIsDeleteModalOpen(false)}
        isOpen={isDeleteModalOpen}
      />
      <NoteFormModal
        title="CHANGE NOTE"
        submitText="CHANGE"
        isOpen={isChangeModalOpen}
        inputValue={inputCheck}
        onChange={setInputCheck}
        onClose={() => setIsChangeModalOpen(false)}
        onSubmit={changeNote}
        showErr={isSubmitted}
        setShowErr={setIsSubmitted}
      />
    </>
  );
}
