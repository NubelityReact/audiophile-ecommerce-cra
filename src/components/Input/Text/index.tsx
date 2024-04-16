import { forwardRef } from "react";
import styles from "./input.text.module.css";
import clsx from "clsx";
import { FieldError } from "react-hook-form";

interface IInputText {
  label: string;
  error?: FieldError;
}

type IInputProps = IInputText & React.InputHTMLAttributes<HTMLInputElement>;

const InputText = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { label, id, error, ...rest } = props;

  const isValid = !Boolean(error);

  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.labelContainer, !isValid && styles.errorText)}
      >
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        {!isValid && (
          <p className={styles.label}>{error?.message || error?.type}</p>
        )}
      </div>
      <input
        id={id}
        ref={ref}
        {...rest}
        className={clsx(styles.input, !isValid && styles.error)}
      />
    </div>
  );
});

export default InputText;
