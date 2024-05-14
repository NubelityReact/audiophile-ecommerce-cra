import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Typography from "../../Typography";
import styles from "./cart.summary.styles.module.css";
import Counter from "../../Counter";
import {
  addProduct,
  removeAll,
  removeProducts,
} from "../../../redux/features/cart/cartSlice";
import SummaryItem from "../SummaryItem";
import { Link } from "react-router-dom";
import Button from "../../Button/Base";

interface ICartSummaryProps {
  btnCb?: () => void;
}

const CartSummary: React.FC<ICartSummaryProps> = (props) => {
  const cartState = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(removeAll());
  };

  const handleIncrease = (item: API.Product) => {
    dispatch(addProduct({ amount: 1, product: item }));
  };

  const handleDecrease = (item: API.Product) => {
    dispatch(removeProducts({ amount: 1, product: item }));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Typography>CART {cartState.totalItems}</Typography>
        <Typography onClick={handleDeleteAll}>Remove all</Typography>
      </header>

      <div className={styles.products}>
        {cartState.products.map((item) => {
          return (
            <SummaryItem key={item.product.id} {...item.product}>
              <Counter
                onIncrease={() => handleIncrease(item.product)}
                onDecrease={() => handleDecrease(item.product)}
                counter={item.amount}
              />
            </SummaryItem>
          );
        })}
      </div>

      <div className={styles.total}>
        <Typography>TOTAL</Typography>
        <Typography>${cartState.subtotal}</Typography>
      </div>

      <Link
        to={"/checkout"}
        className={styles.link}
        onClick={() => props.btnCb && props.btnCb()}
      >
        <Button variant="primary">
          <Typography variant="subtitle">checkout</Typography>
        </Button>
      </Link>
    </div>
  );
};

export default CartSummary;
