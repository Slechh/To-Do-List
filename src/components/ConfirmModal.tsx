import { UiModal } from "../ui/UiModal";
import type { ConfirmModalProps } from "../types/ConfirmModalProps";

export function ConfirmModal({
  note,
  onConfirm,
  onClose,
  isOpen,
}: ConfirmModalProps) {
  return (
    <UiModal className="min-h-50" isModalOpen={isOpen}>
      <h2 className="text-2xl flex justify-center font-medium">DELETE NOTE</h2>
      <div className="mt-2.5 wrap-anywhere">
        Are you sure you want to delete note:{" "}
        <span className="text-purple text-xl">{note.value}</span>?
      </div>
      <div className="mt-auto flex justify-between text-lg font-medium h-9.5">
        <button
          onClick={onClose}
          className="flex items-center text-purple border-[1.5px] border-purple px-5 py-0.75 rounded-md hover:bg-purple/40 hover:text-white transition-all duration-300"
        >
          CANCEL
        </button>

        <button
          onClick={() => onConfirm()}
          className="flex items-center bg-purple text-white px-5 py-0.75 rounded-md hover:bg-dark-purple hover:[box-shadow:0_0_9px_rgba(108,99,255,0.5)] transition-all duration-200"
        >
          DELETE
        </button>
      </div>
    </UiModal>
  );
}
