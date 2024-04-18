import React from "react";
import Modal, { IModalProps } from "../Base";
import CategoryNavigation from "../../Containers/CategoryNavigation";
import { CategoryNavigationData } from "../../../data/categoryNavigation";
import styles from "./modal.menu.styles.module.css";

const ModalMenu: React.FC<Omit<IModalProps, "children">> = (props) => {
  return (
    <Modal
      {...props}
      containerStyles={styles.modalContainer}
      contentStyles={styles.modalContent}
    >
      <CategoryNavigation cards={CategoryNavigationData} />
    </Modal>
  );
};

export default ModalMenu;
