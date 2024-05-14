import React from "react";
import styles from "./order.confirmation.styles.module.css";
import Typography from "../../Typography";
import SummaryItem from "../../Card/SummaryItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { formatMoney } from "../../../utils/formatMoney";
import Button from "../../Button/Base";
import { useNavigate } from "react-router-dom";

export interface IOrderConfirmationProps {
  btnCb: () => void;
}

const OrderConfirmation: React.FC<IOrderConfirmationProps> = (props) => {
  const cartState = useSelector((state: RootState) => state.cart);
  const firstProduct = cartState.products[0];
  const navigation = useNavigate();

  if (!firstProduct) {
    return <div>No products were found, cant place an order yet</div>;
  }

  const handleClose = () => {
    props.btnCb();
    navigation("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.check}>
        <span>&#10004;</span>
      </div>

      <div className={styles.header}>
        <Typography variant="h5">thank you for your order</Typography>
        <Typography>You will receive an email confirmation shortly</Typography>
      </div>

      <div className={styles.content}>
        <div className={styles.products}>
          <SummaryItem {...firstProduct.product}>
            <Typography>x{firstProduct.amount}</Typography>
          </SummaryItem>
          {cartState.products.length > 1 && (
            <Typography>
              and {cartState.totalItems - 1} other item
              {cartState.totalItems - 1 > 1 ? "(s)" : ""}
            </Typography>
          )}
        </div>
        <div className={styles.total}>
          <Typography>grand total</Typography>
          <Typography>{formatMoney(cartState.total)}</Typography>
        </div>
      </div>

      <Button variant="primary" onClick={handleClose} className={styles.button}>
        <Typography variant="subtitle">back to home</Typography>
      </Button>
    </div>
  );
};

export default OrderConfirmation;
