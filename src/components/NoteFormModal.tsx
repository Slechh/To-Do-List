import type { NoteFormModalProps } from "../types/NoteFormmodalProps";
import { UiModal } from "../ui/UiModal";

export function NoteFormModal({
  title,
  submitText,
  isOpen,
  inputValue,
  onChange,
  onClose,
  onSubmit,
}: NoteFormModalProps) {
  return (
    <UiModal className="min-h-72.25" isModalOpen={isOpen}>
      <h2 className="text-2xl flex justify-center font-medium">{title}</h2>
      <div className="relative h-8 mt-5.5">
        <input
          value={inputValue}
          onChange={(e) => onChange(e.target.value)}
          type="search"
          className="appearance-none w-full h-full border-[1.5px] border-purple rounded-md outline-none placeholder:text-light-lavender placeholder:font-medium font-inter text-purple px-4 focus:ring-2 focus:ring-light-purple transition-all duration-300"
          placeholder="Input your note..."
        />
      </div>

      <div className="mt-auto flex justify-between text-lg font-medium h-9.5">
        <button
          className="flex items-center text-purple border-[1.5px] border-purple px-5 py-0.75 rounded-md hover:bg-purple/40 hover:text-white transition-all duration-300"
          onClick={onClose}
        >
          CANCEL
        </button>

        <button
          onClick={onSubmit}
          className="flex items-center bg-purple text-white px-5 py-0.75 rounded-md hover:bg-dark-purple hover:[box-shadow:0_0_9px_rgba(108,99,255,0.5)] transition-all duration-200"
        >
          {submitText}
        </button>
      </div>
    </UiModal>
  );
}
