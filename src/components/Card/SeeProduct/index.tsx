import React from "react";
import Typography from "../../Typography";
import Button from "../../Button/Base";
import styles from "./see.product.styles.module.css";
import { Link } from "react-router-dom";

const SeeProduct: React.FC<API.Product> = (props) => {
  return (
    <article className={styles.container}>
      <picture className={styles.imgContainer}>
        <img
          src={props.image.mobile}
          alt={`product ${props.name}`}
          className={styles.img}
        />
      </picture>

      {props.new && (
        <Typography variant="overline" className="orange">
          new product
        </Typography>
      )}

      <Typography variant="h4">{props.name}</Typography>
      <Typography className={styles.description}>
        {props.description}
      </Typography>

      <Link to={`/product-details/${props.id}`}>
        <Button variant="primary">
          <Typography variant="subtitle">see product</Typography>
        </Button>
      </Link>
    </article>
  );
};

export default SeeProduct;
