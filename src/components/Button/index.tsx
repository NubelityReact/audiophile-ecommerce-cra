import React from "react";
import style from "./button.styles.module.css";
import clsx from "clsx";

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

const Button: React.FC<
  IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const {
    variant,
    children,
    icon = {
      src: "/icons/arrow.svg",
      alt: "go",
    },
    className,
    ...rest
  } = props;

  return (
    <button
      className={clsx(style.general, style[variant], className)}
      {...rest}
    >
      {children}
      {variant === "link" && <img src={icon.src} alt={icon.alt} />}
    </button>
  );
};

export default Button;
