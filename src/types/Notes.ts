export type Note = {
  id: string;
  value: string;
  isCompleted: boolean;
};

export type Notes = {
  notes: Note[];
};

export type NotesProps = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};
