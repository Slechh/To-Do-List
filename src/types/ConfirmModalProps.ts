import type { NoteType } from "./NotesProps";

export type ConfirmModalProps = {
  note: NoteType;
  onConfirm: () => void;
  onClose: () => void;
  isOpen: boolean;
};
