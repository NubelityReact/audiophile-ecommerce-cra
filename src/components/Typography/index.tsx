import React from "react";
import styles from "./typography.styles.module.css";
import clsx from "clsx";

interface ITypographyProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "overline"
    | "subtitle"
    | "body";
}

const Typography: React.FC<ITypographyProps> = (props) => {
  const { variant = "body", as = "p", children } = props;

  return React.createElement(
    as,
    {
      className: clsx(styles.general, styles[variant]),
    },
    children,
  );
};

export default Typography;
