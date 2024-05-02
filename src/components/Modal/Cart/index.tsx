import React, { useState } from "react";
import Modal, { IModalProps } from "../Base";
import styles from "./modal.cart.styles.module.css";
import { useCartContext } from "../../../context/cart";

const p = {
  id: "string",
  name: "as",
  price: 2,
};

const CardCartSummary = () => {
  const [amount, setAmount] = useState(5);
  const { items, setItems } = useCartContext();

  return (
    <div style={{ background: "white" }}>
      <button onClick={() => setAmount(amount - 1)}>-</button>
      <p>{amount}</p>
      <button onClick={() => setAmount(amount + 1)}>+</button>

      <button onClick={() => setItems([...items, { product: p, amount }])}>
        Add to cart
      </button>
    </div>
  );
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
