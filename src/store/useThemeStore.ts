import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStore = {
  theme: "light" | "dark";

  toggleTheme: () => void;
};

const getInitialTheme = (): "light" | "dark" => {
  try {
    const stored = JSON.parse(localStorage.getItem("theme-storage") || "{}");
    return stored?.state?.theme ?? "light";
  } catch {
    return "light";
  }
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: getInitialTheme(),

      toggleTheme: () =>
        set((state) => {
          const newTheme = state.theme === "light" ? "dark" : "light";
          document.documentElement.classList.remove("light", "dark");
          document.documentElement.classList.add(newTheme);
          return { theme: newTheme };
        }),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (state) => {
        if (state) {
          document.documentElement.classList.remove("light", "dark");
          document.documentElement.classList.add(state.theme);
        }
      },
    },
  ),
);
