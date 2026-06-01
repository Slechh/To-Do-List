import clsx from "clsx";

import { toast } from "sonner";

import { useState, useEffect, useCallback } from "react";
import { ConfirmModal } from "./ConfirmModal";
import { NoteFormModal } from "./NoteFormModal";

import type { NoteItemProps } from "../types/NotesProps";

export function Note({ note, isLast, setNotes }: NoteItemProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
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

  const deleteNote = useCallback(() => {
    setNotes((prev) => prev.filter((item) => item.id !== note.id));
    setIsDeleteModalOpen(false);
    toast.success("Заметка успешно удалена!", { duration: 3000 });
  }, [note.id, setNotes]);

  const changeNote = useCallback(() => {
    setNotes((prev) =>
      prev.map((item) =>
        item.id === note.id ? { ...item, value: inputCheck.trim() } : item,
      ),
    );
    setIsChangeModalOpen(false);
    toast.success("Заметка успешно изменена!", { duration: 3000 });
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
        toast.dismiss("empty-input");
      }
      if (e.key === "Enter") {
        if (!inputCheck.trim()) {
          toast.error("Введите хотяб 1 символ", {
            duration: 3000,
            id: "empty-input",
          });
          return;
        }
        changeNote();
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
                <svg className="w-4.5 h-4.5 text-gray-500 dark:text-gray-300 hover:text-purple">
                  <use href="/icons/sprite.svg#edit-icon" />
                </svg>
              </button>
              <button onClick={() => setIsDeleteModalOpen(true)}>
                <svg className="w-4.5 h-4.5 text-gray-500 dark:text-gray-300 hover:text-red">
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
        onClose={() => {
          setIsChangeModalOpen(false);
          toast.dismiss("empty-input");
        }}
        onSubmit={changeNote}
      />
    </>
  );
}
