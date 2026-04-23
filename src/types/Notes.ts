export type Note = {
  id: string;
  value: string;
  isCompleted: boolean;
};

export type NoteListProps = {
  notesList: Note[];
};

export type NoteItemProps = {
  note: Note;
  isLast: boolean;
};
