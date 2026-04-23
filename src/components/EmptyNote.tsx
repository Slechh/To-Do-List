export function EmptyNote() {
  return (
    <div className="mx-auto flex flex-col gap-5 mt-7.5 items-center justify-center">
      <img
        src="/src/assets/images/empty-tasks.png"
        alt=""
        className="w-55.25 h-42.75"
      />
      <h2 className="text-xl">Empty...</h2>
    </div>
  );
}
