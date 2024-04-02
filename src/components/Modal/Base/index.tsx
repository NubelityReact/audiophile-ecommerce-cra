import React from "react";
import { createPortal } from "react-dom";
import styles from "./modal.base.styles.module.css";
import clsx from "clsx";

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  nodeId?: string;
  containerStyles?: string;
  contentStyles?: string;
}

const Modal: React.FC<IModalProps> = (props) => {
  const { isOpen, nodeId = "modal", ...rest } = props;

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <ModalChildren {...rest} />,
    document.getElementById(nodeId) as HTMLElement,
  );
};

const ModalChildren: React.FC<Omit<IModalProps, "nodeId" | "isOpen">> = (
  props,
) => {
  const { children, onClose, containerStyles, contentStyles } = props;
  return (
    <div className={clsx(styles.container, containerStyles)} onClick={onClose}>
      <div className={clsx(styles.content, contentStyles)}>{children}</div>
    </div>
  );
};

export default Modal;
