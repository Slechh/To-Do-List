export type NoteType = {
  id: string;
  value: string;
  isCompleted: boolean;
};

export type SetNotesProps = {
  setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>;
};

export type NoteListProps = {
  notesList: NoteType[];
  inputValue: string;
  setInputValue: (value: string) => void;
} & SetNotesProps;

export type NoteItemProps = {
  note: NoteType;
  isLast: boolean;
  inputValue: string;
  setInputValue: (value: string) => void;
} & SetNotesProps;
