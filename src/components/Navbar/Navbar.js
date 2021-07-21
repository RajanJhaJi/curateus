import React from "react";
import { FiBox, FiUser, FiUsers, FiMenu } from "react-icons/fi";

import styles from "./Navbar.module.css";

const Navbar = () => {
  function toggle() {
    const sideBar = document.querySelector(".side-bar");
    sideBar.classList.toggle("toggle-bar");
  }

  return (
    <div className={styles.navContainer}>
      <div className="logo-container">
        <a href="#" className={styles.logo}>
          Curateus
        </a>
      </div>
      <ul className={styles.navList}>
        <li>
          <a href="#" className={`${styles.navItem} highlight-yellow`}>
            <FiBox className={styles.navLogo} />
            Manage content
          </a>
        </li>
        <li>
          <a href="#" className={styles.navItem}>
            <FiUser className={styles.navLogo} />
            Your Profile
          </a>
        </li>
        <li>
          <a href="#" className={styles.navItem}>
            <FiUsers className={styles.navLogo} />
            Discover People
          </a>
        </li>
        <li>
          <a href="#" className={`${styles.navItem} highlight-blue`}>
            Shane Neaubauer
            <FiMenu className={styles.navLogo} />
          </a>
        </li>
      </ul>
      <a href="#" className={styles.navItem} onClick={toggle}>
        <FiMenu size={32} className={styles.menu} />
      </a>
    </div>
  );
};

export default Navbar;
