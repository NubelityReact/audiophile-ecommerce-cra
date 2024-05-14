import React, { useEffect, useRef } from "react";
import GoBack from "../../components/Button/GoBack";
import Typography from "../../components/Typography";
import FormCheckout, {
  IFormCheckoutRef,
} from "../../components/Containers/Forms/Checkout";
import Summary from "../../components/Card/Summary";
import styles from "./checkout.styles.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const formRef = useRef<IFormCheckoutRef>(null);
  const navigation = useNavigate();
  const { products } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    if (products.length === 0) {
      navigation("/");
    }
  }, [products, navigation]);

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.onSubmit();
    }
  };

  return (
    <div className={styles.container}>
      <GoBack />

      <div className={styles.section}>
        <Typography as="h1" variant="h4">
          checkout
        </Typography>
        <FormCheckout ref={formRef} />
      </div>

      <div className={styles.section}>
        <Summary onSumbit={handleSubmit} />
      </div>
    </div>
  );
};

export default Checkout;
