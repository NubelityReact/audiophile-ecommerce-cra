import { forwardRef } from "react";
import styles from "./input.radio.styles.module.css";

export interface IRadioOption {
  id: string;
  label: string;
}

interface IInputRadioProps {
  options: IRadioOption[];
}

type IInputRadio = IInputRadioProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "id">;

const InputRadio = forwardRef<HTMLInputElement, IInputRadio>((props, ref) => {
  const { options, ...rest } = props;

  return (
    <div className={styles.container}>
      {options.map((item) => {
        return (
          <label key={item.id} className={styles.inputContainer}>
            <input
              ref={ref}
              {...rest}
              type="radio"
              value={item.id}
              className={styles.input}
            />
            <p className={styles.text}>{item.label}</p>
          </label>
        );
      })}
    </div>
  );
});

export default InputRadio;
