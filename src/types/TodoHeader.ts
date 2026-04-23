import type { Note } from "./Notes";

export type TodoHeaderProps = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};
