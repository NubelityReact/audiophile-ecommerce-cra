import React, { useState } from "react";
import styles from "./header.styles.module.css";
import Links from "../../Links";
import Modal from "../../Modal/Base";
import Typography from "../../Typography";
import ModalCard from "../../Modal/Cart";
import useViewportMatchSize from "../../../hooks/useViewportMatchSize";
import ModalMenu from "../../Modal/Menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const { match } = useViewportMatchSize("desktop");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
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
            <picture className={styles.menu} onClick={toggleMenu}>
              <img src="/icons/burguer-icon.svg" alt="menu" />
            </picture>

            <picture className={styles.logo}>
              <img src="/logo.png" alt="company's logo" />
            </picture>
          </div>

          {match && <Links />}

          <picture className={styles.cart} onClick={openCart}>
            <img src="/icons/cart.svg" alt="cart" />
          </picture>
        </header>
      </div>
      <ModalMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <ModalCard isOpen={isCartOpen} onClose={closeCart} nodeId="modal2" />
    </>
  );
};

export default Header;
