import React from "react";
import style from "./button.styles.module.css";

interface IIcon {
  src?: string;
  alt?: string;
}

type IButtonProps =
  | {
      variant: "primary" | "outlined";
      children: React.ReactNode;
      icon?: never;
    }
  | {
      variant: "link";
      children: React.ReactNode;
      icon?: IIcon;
    };

const Button: React.FC<IButtonProps> = (props) => {
  const {
    variant,
    children,
    icon = {
      src: "/icons/arrow.svg",
      alt: "go",
    },
  } = props;

  return (
    <button className={style[variant]}>
      {children}
      {variant === "link" && <img src={icon.src} alt={icon.alt} />}
    </button>
  );
};

export default Button;
