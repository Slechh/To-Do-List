import { EmptyNote } from "./EmptyNote";
import { Note } from "./Note";

import type { NoteListProps } from "../types/NotesProps";

export function NoteList({
  notesList,
  setNotes,
  setInputValue,
  inputValue,
}: NoteListProps) {
  if (notesList.length < 1) return <EmptyNote />;

  return (
    <ul className="flex flex-col">
      {notesList.map((note, index) => (
        <Note
          key={note.id}
          note={note}
          isLast={notesList.length - 1 === index && notesList.length !== 1}
          setNotes={setNotes}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
      ))}
    </ul>
  );
}
