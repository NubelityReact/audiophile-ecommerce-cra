import React from "react";
import styles from "./typography.styles.module.css";
import clsx from "clsx";
import { withHTMLAttrs } from "../../customTypes/utils";

interface ITypographyProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
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

const Typography: React.FC<withHTMLAttrs<ITypographyProps>> = (props) => {
  const { variant = "body", as = "p", children, className, ...rest } = props;

  return React.createElement(
    as,
    {
      className: clsx(styles.general, styles[variant], className),
      ...rest,
    },
    children,
  );
};

export default Typography;
