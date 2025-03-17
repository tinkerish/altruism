import { useEffect, useRef, useState } from "react";
import "../styles/modal.css";
import { createPortal } from "react-dom";
import { focusTrapping } from "../utils/focusTrap";
const POSITIONS = {
  "top-left": "flex justify-start items-start",
  center: "flex justify-center items-center",
  "bottom-right": "flex justify-end items-end",
  "bottom-left": "flex justify-start items-end",
  "top-right": "flex justify-end items-start",
  "top-center": "flex justify-center items-start",
  "bottom-center": "flex justify-center items-end",
};
interface ModalProps {
  show: boolean;
  onClose: () => void;
  containerClassName: string;
  className?: string;
  children: React.ReactNode;
  title: string;
  actionButtonName: string;
  position?:
    | "top-left"
    | "center"
    | "bottom-right"
    | "bottom-left"
    | "top-right"
    | "top-center"
    | "bottom-center";
  isOutsideClickable?: boolean;
  escapable?: boolean;
  onSave?: () => void;
}
const Modal = ({
  title,
  containerClassName,
  position = "center",
  onClose,
  isOutsideClickable = true,
  escapable = true,
  show,
  actionButtonName,
  onSave,
  children,
}) => {
  const [container, setContainer] = useState(null);
  const modalOverlayRef = useRef(null);
  const modalRef = useRef(null);
  useEffect(() => {
    if (containerClassName) {
      const container = document.querySelector(containerClassName);
      if (container) {
        setContainer(container);
      } else {
        console.error(
          `Container with class name ${containerClassName} not found`
        );
        setContainer(document.body);
      }
    }
  }, [containerClassName]);
  useEffect(() => {
    if (isOutsideClickable && container && show) {
      const handleClick = (e) => {
        const target = e.target;
        if (target?.parentNode === container) {
          onClose();
        }
      };
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, [isOutsideClickable, container, onClose, show]);
  useEffect(() => {
    if (escapable && show) {
      const handleEscape = (e) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [escapable, onClose, show]);
  const focusTrap = (e) => {
    if (!modalOverlayRef.current) return;
    focusTrapping(e, modalOverlayRef.current);
  };
  useEffect(() => {
    if (show) {
      document.addEventListener("keydown", focusTrap);
      return () => {
        document.removeEventListener("keydown", focusTrap);
      };
    }
  }, [show]);
  useEffect(() => {
    if (modalRef.current && show) {
      modalRef.current.focus();
    }
  }, [show]);

  if (!container || !show) return null;
  return createPortal(
    <div
      role="presentation"
      ref={modalOverlayRef}
      className={`animate-overlay fixed p-4 bg-black/40 z-[100] w-full h-full top-0 left-0 ${POSITIONS[position]}`}
    >
      <div
        className="animate-modal absolute bg-white  border-solid border-black p-8 rounded-lg shadow-xl"
        tabIndex={-1}
        ref={modalRef}
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-content"
        aria-modal="true"
      >
        <header className="box flex flex-col gap-[2px] items-center relative w-full">
          <p className="relative border border-solid border-[#e1742c] before:content-['..'] before:absolute before:-bottom-[0.45rem] before:right-[101%] before:text-[#e1742c] after:text-[#e1742c] after:content-['..'] after:absolute after:-bottom-[0.45rem] after:left-[101%] h-0 text-white overflow-hidden">
            {title}
            {title.substring(0, title.length / 4)}
          </p>
          <p className="relative border border-solid border-[#e1742c] before:content-['..'] before:absolute before:-bottom-[0.45rem] before:right-[101%] after:content-['..'] after:absolute after:-bottom-[0.45rem] after:left-[101%] before:text-[#e1742c] after:text-[#e1742c]  h-0 text-white overflow-hidden">
            {title}
            {title.substring(0, title.length / 2)}
          </p>
          <h1
            className="z-10 bg- text-center leading-[1rem] -translate-y-[100%] masking bg-white text-[#e1742c] font-bold"
            id="modal-title"
          >
            {title}
          </h1>
          <div
            className="flex absolute -top-[2.5rem] -right-[2.5rem] items-center justify-end w-full"
            onClick={onClose}
          >
            <button
              className="z-10 text-center rounded-full bg-[#e1742c] text-white w-[1.5rem] h-[1.5rem]"
              aria-label="close"
            >
              X
            </button>
          </div>
        </header>
        <section id="modal-content">{children}</section>
        <footer className="flex absolute top-[85%] left-0 items-center justify-center w-full ">
          <button
            onClick={onSave}
            className="z-10 text-center rounded-[3rem] bg-[#4c84ea] text-white p-1 w-[5rem]"
            aria-label="save"
          >
            {actionButtonName}
          </button>
        </footer>
      </div>
    </div>,
    container
  );
};

export default Modal;
