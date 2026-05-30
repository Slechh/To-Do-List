import { useModal } from "./hooks/useModal";
import { useState } from "react";

// import { Toaster } from "sonner";
import { TodoHeader } from "./components/TodoHeader";
import { Layout } from "./components/Layout";
import { AddNoteModal } from "./components/AddNoteModal";
import { AddNoteBtn } from "./components/AddNoteBtn";

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
      { value: newNote.trim(), id: crypto.randomUUID(), isCompleted: false },
    ]);
    handleClose();
  };

  console.log(notes);
  return (
    <Layout>
      {/* <Toaster richColors closeButton /> Просто прописали один раз тут */}
      <TodoHeader
        notes={notes}
        setNotes={setNotes}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
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
