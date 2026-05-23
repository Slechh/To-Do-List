export function EmptyNote() {
  return (
    <div className="mx-auto flex flex-col gap-5 mt-7.5 items-center justify-center">
      <img
        src="/src/assets/images/empty-tasks.png"
        alt="No notes"
        className="w-55.25 h-42.75 dark:hidden"
      />
      <img
        src="/src/assets/images/empty-tasks-dark.png"
        alt="No notes"
        className="w-55.25 h-42.75 hidden dark:block"
      />
      <h2 className="text-xl dark:text-white">Empty...</h2>
    </div>
  );
}
