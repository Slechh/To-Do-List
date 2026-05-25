export type NoteFormModalProps = {
  title: string;
  submitText: string;
  isOpen: boolean;
  inputValue: string;
  onChange: (e: string) => void;
  onClose: () => void;
  onSubmit: (e: string) => void;
  showErr: boolean;
  setShowErr: (e: boolean) => void;
};
