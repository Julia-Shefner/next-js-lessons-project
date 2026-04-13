"use client";

import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import css from "@/components/Modal/Modal.module.css";

type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  const router = useRouter();
  const close = () => router.back();

  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button onClick={close} className={css.closeButton}>
          Close
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
