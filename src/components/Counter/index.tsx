import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import Typography from "../Typography";
import styles from "./counter.styles.module.css";

interface ICounterProps {
  onIncrease?: () => void;
  onDecrease?: () => void;
  counter?: number;
}

const Counter = forwardRef<number, ICounterProps>((props, ref) => {
  const { onDecrease, onIncrease, counter } = props;
  const [icounter, setICounter] = useState(counter ?? 1);

  const value = typeof counter === "number" ? counter : icounter;

  useEffect(() => {
    if (typeof counter === "number") {
      setICounter(counter);
    }
  }, [counter]);

  const handleIncrease = () => {
    onIncrease && onIncrease();
    if (typeof counter === "number") {
      return;
    }

    setICounter(icounter + 1);
  };

  const handleDecrease = () => {
    onDecrease && onDecrease();
    if (typeof counter === "number") {
      return;
    }

    if (icounter <= 1) {
      setICounter(1);
      return;
    }

    setICounter(icounter - 1);
  };

  useImperativeHandle(ref, () => value);

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleDecrease}>
        -
      </button>
      <Typography>{value}</Typography>
      <button className={styles.button} onClick={handleIncrease}>
        +
      </button>
    </div>
  );
});

export default Counter;
