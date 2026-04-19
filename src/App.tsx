import { TodoHeader } from "./components/TodoHeader";
import { AddNoteModal } from "./components/AddNoteModal";
import { useModal } from "./hooks/useModal";
import { EmptyNote } from "./components/EmptyNote";
import { AddNoteBtn } from "./components/AddNoteBtn";
import { Layout } from "./components/Layout";

function App() {
  const {
    isModalOpen,
    inputValue,
    setIsModalOpen,
    setInputValue,
    handleClose,
    handleOpen,
  } = useModal();

  return (
    <Layout>
      <TodoHeader />
      <EmptyNote />
      <AddNoteBtn handleOpen={handleOpen} />
      <AddNoteModal
        isModalOpen={isModalOpen}
        inputValue={inputValue}
        setIsModalOpen={setIsModalOpen}
        setInputValue={setInputValue}
        handleClose={handleClose}
      />
    </Layout>
  );
}

export default App;
