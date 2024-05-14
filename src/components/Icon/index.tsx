import React from "react";
import { Image, withHTMLAttrs } from "../../customTypes/utils";
import styles from "./icon.styles.module.css";
import clsx from "clsx";

interface IIconProps {
  icon: Image;
  n?: number;
}

const Icon: React.FC<withHTMLAttrs<IIconProps>> = ({
  n,
  icon,
  className,
  ...attrs
}) => {
  return (
    <div className={clsx(styles.container, className)} {...attrs}>
      {typeof n === "number" && (
        <span className={styles.floatContent}>{n}</span>
      )}
      <picture
        className={styles.iconContainer}
        style={{ width: icon.width, height: icon.height }}
      >
        <img {...icon} alt={icon.alt} className={styles.icon} />
      </picture>
    </div>
  );
};

export default Icon;
