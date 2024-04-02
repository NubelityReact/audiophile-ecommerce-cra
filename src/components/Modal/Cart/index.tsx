import React from "react";
import Modal, { IModalProps } from "../Base";
import styles from "./modal.cart.styles.module.css";

const CardCartSummary = () => {
  return <div>card cart summary </div>;
};

const ModalCart: React.FC<Omit<IModalProps, "children">> = (props) => {
  return (
    <Modal {...props} containerStyles={styles.overlay}>
      <button onClick={props.onClose}>X</button>
      <CardCartSummary />
    </Modal>
  );
};

export default ModalCart;
