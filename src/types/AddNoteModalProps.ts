export type AddNoteModalProps = {
  isModalOpen: boolean;
  inputValue: string;
  setInputValue: (value: string) => void;
  setIsModalOpen: (value: boolean) => void;
  handleClose: () => void;
};
