import React from "react";
import { navigationLinks } from "./links";
import { NavLink } from "react-router-dom";
import Typography from "../Typography";
import styles from "./links.styles.module.css";
import clsx from "clsx";

interface ILinksProps {
  className?: string;
}

const Links: React.FC<ILinksProps> = (props) => {
  const { className } = props;

  return (
    <ul className={clsx(className, styles.container)}>
      {navigationLinks.map((item) => {
        return (
          <li key={item.to} className={styles.link}>
            <NavLink
              to={item.to}
              className={({ isActive }) => {
                let style = styles.link;
                if (isActive) {
                  style = style + " " + styles.activeLink;
                }
                return style;
              }}
            >
              <Typography className={styles.text}>{item.label}</Typography>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
