import React from "react";
import Typography from "../../Typography";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import SummaryItem from "../SummaryItem";
import Button from "../../Button/Base";
import styles from "./summary.styles.module.css";
import { formatMoney } from "../../../utils/formatMoney";

interface ISummaryProps {
  onSumbit: () => void;
}

const Summary: React.FC<ISummaryProps> = (props) => {
  const cartState = useSelector((state: RootState) => state.cart);
  return (
    <div className={styles.container}>
      <Typography variant="h6">summary</Typography>

      <div className={styles.products}>
        {cartState.products.map((item) => {
          return (
            <SummaryItem {...item.product}>
              <Typography>x{item.amount}</Typography>
            </SummaryItem>
          );
        })}
      </div>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Typography as="span">total</Typography>
          <Typography as="span">{formatMoney(cartState.subtotal)}</Typography>
        </li>
        <li className={styles.listItem}>
          <Typography as="span">shipping</Typography>
          <Typography as="span">{formatMoney(cartState.shipping)}</Typography>
        </li>
        <li className={styles.listItem}>
          <Typography as="span">vat (included)</Typography>
          <Typography as="span">{formatMoney(cartState.vat)}</Typography>
        </li>
        <li className={styles.listItem}>
          <Typography as="span">grand total</Typography>
          <Typography as="span">{formatMoney(cartState.total)}</Typography>
        </li>
      </ul>

      <Button
        variant="primary"
        className={styles.button}
        onClick={() => props.onSumbit()}
      >
        <Typography variant="subtitle">Continue and pay</Typography>
      </Button>
    </div>
  );
};

export default Summary;
