import { TodoHeader } from "./components/TodoHeader";
import { AddNoteModal } from "./components/AddNoteModal";
import { useModal } from "./hooks/useModal";
import { AddNoteBtn } from "./components/AddNoteBtn";
import { Layout } from "./components/Layout";
import { useState } from "react";
import type { NoteType } from "./types/NotesProps";

function App() {
  const {
    isModalOpen,
    inputValue,
    setIsModalOpen,
    setInputValue,
    handleClose,
    handleOpen,
  } = useModal();

  const [notes, setNotes] = useState<Array<NoteType>>([
    { value: "NOTE1", id: crypto.randomUUID(), isCompleted: false },
    { value: "NOTE2", id: crypto.randomUUID(), isCompleted: false },
    { value: "NOTE3", id: crypto.randomUUID(), isCompleted: false },
  ]);
  
  const createNote = (newNote: string) => {
    setNotes((prev) => [
      ...prev,
      { value: newNote, isCompleted: false, id: crypto.randomUUID() },
    ]);
    handleClose();
  };
  console.log(notes);
  return (
    <Layout>
      <TodoHeader notes={notes} setNotes={setNotes} />
      <AddNoteBtn handleOpen={handleOpen} />
      <AddNoteModal
        isModalOpen={isModalOpen}
        inputValue={inputValue}
        setIsModalOpen={setIsModalOpen}
        setInputValue={setInputValue}
        handleClose={handleClose}
        createNote={createNote}
      />
    </Layout>
  );
}

export default App;
