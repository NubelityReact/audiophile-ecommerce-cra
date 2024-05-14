import React from "react";
import Typography from "../../Typography";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Button from "../../Button/Base";
import styles from "./product.recommendation.styles.module.css";

const ProductRecommendation: React.FC<API.Product["others"][number]> = (
  props,
) => {
  const { products } = useSelector((state: RootState) => state.products);
  const productId =
    products.find((item) => item.slug === props.slug)?.id ?? "x";

  return (
    <article className={styles.container}>
      <picture className={styles.imgContainer}>
        <img src={props.image.mobile} alt={props.name} className={styles.img} />
      </picture>

      <Typography as="h4">{props.name}</Typography>

      <Link to={`/product-details/${productId}`}>
        <Button variant="primary">
          <Typography variant="subtitle">see product</Typography>
        </Button>
      </Link>
    </article>
  );
};

export default ProductRecommendation;
