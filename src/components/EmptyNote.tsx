import { useThemeStore } from "../store/useThemeStore";

export function EmptyNote() {
  const theme = useThemeStore((state) => state.theme);
  const showImage = theme === "light" ? "empty-tasks" : "empty-tasks-dark";
  return (
    <div className="mx-auto flex flex-col gap-5 mt-7.5 items-center justify-center">
      <img
        src={`/src/assets/images/${showImage}.png`}
        alt=""
        className="w-55.25 h-42.75"
      />
      <h2 className="text-xl dark:text-white">Empty...</h2>
    </div>
  );
}
