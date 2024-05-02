import React from "react";
import { Image, withHTMLAttrs } from "../../customTypes/utils";
import styles from "./icon.styles.module.css";

interface IIconProps {
  icon: Image;
  n?: number;
}

const Icon: React.FC<withHTMLAttrs<IIconProps>> = ({ n, icon, ...attrs }) => {
  return (
    <div className={styles.container} {...attrs}>
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
