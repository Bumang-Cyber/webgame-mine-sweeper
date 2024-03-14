import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const modalRoot = document.getElementById("modal-root")!;

  return createPortal(children, modalRoot);
};

export default Modal;
