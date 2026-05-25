import clsx from "clsx";

import { useState, useEffect } from "react";
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

  const deleteNote = () => {
    setNotes((prev) => prev.filter((item) => item.id !== note.id));
    setIsDeleteModalOpen(false);
  };

  const changeNote = () => {
    setNotes((prev) =>
      prev.map((item) =>
        item.id === note.id ? { ...item, value: inputCheck.trim() } : item,
      ),
    );
    setIsChangeModalOpen(false);
  };

  useEffect(() => {
    if (!isDeleteModalOpen) return;

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
  }, [setIsDeleteModalOpen, setNotes, note.id, isDeleteModalOpen]);

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
        setNotes((prev) =>
          prev.map((item) =>
            item.id === note.id ? { ...item, value: inputCheck.trim() } : item,
          ),
        );
        setIsSubmitted(false);
        setIsChangeModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyClose);
    return () => window.removeEventListener("keydown", handleKeyClose);
  }, [isChangeModalOpen, inputCheck, note.id, setNotes]);

  return (
    <>
      <li
        className={clsx(!isLast && "border-b border-purple/50 pb-3.5 mb-3.5")}
      >
        <label htmlFor={note.id}>
          <input
            id={note.id}
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
                  "w-6.5 h-6.5 border border-purple rounded-xs shrink-0 flex items-center justify-center transition-colors duration-300",
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

            <div className="flex gap-2.5 shrink-0">
              <button
                onClick={() => {
                  setInputCheck(note.value);
                  setIsChangeModalOpen(true);
                }}
              >
                <svg className="w-4.5 h-4.5 text-gray-300">
                  <use href="/icons/sprite.svg#edit-icon" />
                </svg>
              </button>
              <button onClick={() => setIsDeleteModalOpen(true)}>
                <svg className="w-4.5 h-4.5 text-gray-300">
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
