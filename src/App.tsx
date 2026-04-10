import { useState } from "react";

function App() {
  const a = new Date();
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="pt-10 flex flex-col gap-4.5">
          <h1 className="text-[26px] m-auto">TODO LIST</h1>
          <div className="flex h-10 gap-4">
            <div className="relative h-full flex-1">
              <input
                type="search"
                className="appearance-none w-full h-full border-[1.5px] border-purple rounded-md outline-none placeholder:text-light-lavender font-inter text-purple pl-4 pr-10 focus:ring-2 focus:ring-light-purple transition-all duration-300"
                placeholder="Search note..."
              />
              <button>
                <svg className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <use href="/src/assets/icons/sprite.svg#search-icon" />
                </svg>
              </button>
            </div>
            <button className="flex items-center gap-7 text-lg text-white bg-purple p-2.5 rounded-md hover:bg-dark-purple hover:[box-shadow:0_0_9px_rgba(108,99,255,0.5)] transition-shadow duration-200">
              <span>ALL</span>
              <svg className="w-2 h-2">
                <use href="/src/assets/icons/sprite.svg#chevron-icon" />
              </svg>
            </button>
            <button className="flex items-center gap-7 text-lg text-white bg-purple p-2 rounded-md hover:bg-dark-purple hover:[box-shadow:0_0_9px_rgba(108,99,255,0.5)] transition-shadow duration-200">
              <svg className="w-5.5 h-5.5">
                <use href="/src/assets/icons/sprite.svg#moon-icon" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
