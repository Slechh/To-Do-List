import { useState } from "react";
import { TodoHeader } from "./components/TodoHeader";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpen = () => setIsModalOpen((prev) => !prev);
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto py-10 px-4 flex flex-col min-h-screen">
        <TodoHeader />
        <img
          src="/src/assets/images/empty-tasks.png"
          alt=""
          className="w-55.25 h-42.75 mx-auto mt-7.5"
        />
        <div className="flex justify-end mt-auto">
          <button
            className="bg-purple p-3.5 rounded-full hover:bg-dark-purple [box-shadow:0_0_9px_rgba(108,99,255,0.5)] transition-all duration-300"
            onClick={handleOpen}
          >
            <svg className="w-6 h-6 text-white">
              <use href="/src/assets/icons/sprite.svg#plus-icon" />
            </svg>
          </button>
        </div>

        {isModalOpen && <div className="fixed inset-0 bg-black/60 z-50"></div>}
      </div>
    </div>
  );
}

export default App;
