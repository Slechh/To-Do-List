import type { NoteType } from "./NotesProps";
import type { SetNotesProps } from "./NotesProps";

export type TodoHeaderProps = {
  notes: NoteType[];
} & SetNotesProps;
