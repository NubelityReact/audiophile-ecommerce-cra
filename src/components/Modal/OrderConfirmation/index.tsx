import React from "react";
import Modal, { IModalProps } from "../Base";
import OrderConfirmation from "../../Card/OrderConfirmation";
import styles from "./moda.order.confirmation.styles.module.css";

const ModalOrderConfirmation: React.FC<Omit<IModalProps, "children">> = (
  props,
) => {
  return (
    <Modal
      {...props}
      containerStyles={styles.overlay}
      contentStyles={styles.content}
    >
      <OrderConfirmation btnCb={props.onClose} />
    </Modal>
  );
};

export default ModalOrderConfirmation;
