import { useState } from "react";
import { toast } from "sonner";

export function useModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleOpen = () => setIsModalOpen((prev) => !prev);
  const handleClose = () => {
    setIsModalOpen(false);
    setInputValue("");
    toast.dismiss("empty-input");
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
