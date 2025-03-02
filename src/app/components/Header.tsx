// Header component provides a simple navigation bar for the site
import React, { FC } from "react";
import styles from "./Header.module.scss";

const Header: FC = () => {
  // Renders a fixed header containing three main navigation links
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.link}>Our Plans</a>
        <a href="#" className={styles.link}>Our Team</a>
        <a href="#" className={styles.link}>Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
