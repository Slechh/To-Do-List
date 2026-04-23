import type { NoteListProps } from "../types/Notes";
import { Note } from "./Note";

export function NoteList({ notesList }: NoteListProps) {
  if (notesList.length < 1) return null;

  return (
    <ul className="flex flex-col">
      {notesList.map((note, index) => (
        <Note
          key={note.id}
          note={note}
          isLast={notesList.length - 1 === index}
        />
      ))}
    </ul>
  );
}
