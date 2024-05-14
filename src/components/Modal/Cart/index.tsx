import React from "react";
import Modal, { IModalProps } from "../Base";
import styles from "./modal.cart.styles.module.css";
import CartSummary from "../../Card/CartSummary";

const ModalCart: React.FC<Omit<IModalProps, "children">> = (props) => {
  return (
    <Modal {...props} containerStyles={styles.overlay}>
      <CartSummary btnCb={props.onClose} />
    </Modal>
  );
};

export default ModalCart;
