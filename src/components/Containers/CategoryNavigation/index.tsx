import React from "react";
import CardCategory, { ICardCaterogyProps } from "../../Card/Category";
import { Link } from "react-router-dom";
import styles from "./category.navigation.styles.module.css";

export interface ICategoryNavigationProps {
  cards: Array<ICardCaterogyProps & { href: string }>;
}

const CategoryNavigation: React.FC<ICategoryNavigationProps> = (props) => {
  const { cards } = props;

  return (
    <nav className={styles.container}>
      {cards.map((item) => {
        const { href, ...rest } = item;
        return (
          <Link to={href} className={styles.link}>
            <CardCategory {...rest} />
          </Link>
        );
      })}
    </nav>
  );
};

export default CategoryNavigation;
