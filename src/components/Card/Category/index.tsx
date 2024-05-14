import React from "react";
import { Image } from "../../../customTypes/utils";
import Typography from "../../Typography";
import Button from "../../Button/Base";
import styles from "./card.category.styles.module.css";

export interface ICardCaterogyProps {
  img: Image;
  title: string;
}

const CardCategory: React.FC<ICardCaterogyProps> = (props) => {
  const { img, title } = props;

  return (
    <article className={styles.container}>
      <picture className={styles.imgContainer}>
        <img
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          className={styles.img}
        />
      </picture>

      <div className={styles.body}>
        <Typography className={styles.title}>{title}</Typography>
        <Button variant="link">
          <Typography variant="subtitle">shop</Typography>
        </Button>
      </div>
    </article>
  );
};

export default CardCategory;
