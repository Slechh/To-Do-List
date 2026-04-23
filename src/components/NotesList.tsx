import type { Notes } from "../types/Notes";
import { Note } from "./Note";

export function NoteList({ notes }: Notes) {
  return (
    notes.length > 0 && (
      <ul className="flex flex-col">
        <Note notes={notes} />
      </ul>
    )
  );
}
