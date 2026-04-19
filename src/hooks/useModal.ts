import { useState } from "react";

export function useModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleOpen: () => void = () => setIsModalOpen((prev) => !prev);
  const handleClose = () => {
    setIsModalOpen(false);
    setInputValue("");
  };

  return {
    isModalOpen,
    inputValue,
    setIsModalOpen,
    setInputValue,
    handleClose,
    handleOpen,
  };
}
