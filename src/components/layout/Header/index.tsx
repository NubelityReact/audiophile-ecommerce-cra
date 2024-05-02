import React, { useState } from "react";
import styles from "./header.styles.module.css";
import Links from "../../Links";
import ModalCard from "../../Modal/Cart";
import useViewportMatchSize from "../../../hooks/useViewportMatchSize";
import ModalMenu from "../../Modal/Menu";
import { useNavigate } from "react-router-dom";
import Icon from "../../Icon";
import { useCartContext } from "../../../context/cart";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const { items } = useCartContext();

  const { match } = useViewportMatchSize("desktop");

  const router = useNavigate();

  const handleNavigation = () => {
    router("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <div className={styles.supercontainer}>
        <header className={styles.container}>
          <div className={styles.leftColumn}>
            <Icon
              icon={{ src: "/icons/burger-icon.svg", alt: "menu icon" }}
              onClick={toggleMenu}
            />

            <Icon
              icon={{ src: "/logo.png", alt: "company's logo", width: 140 }}
              onClick={handleNavigation}
            />
          </div>

          {match && <Links />}

          <Icon
            icon={{ src: "/icons/cart.svg", alt: "cart" }}
            onClick={openCart}
            n={items.reduce((acc, item) => {
              return acc + item.amount;
            }, 0)}
          />
        </header>
      </div>
      <ModalMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <ModalCard isOpen={isCartOpen} onClose={closeCart} nodeId="modal2" />
    </>
  );
};

export default Header;
