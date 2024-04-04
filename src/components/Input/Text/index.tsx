import { forwardRef } from "react";

interface IInputText {
  label: string;
}

type IInputProps = IInputText & React.InputHTMLAttributes<HTMLInputElement>;

const InputText = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { label, id, ...rest } = props;

  return (
    <div className="container">
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...rest} />
    </div>
  );
});

export default InputText;
