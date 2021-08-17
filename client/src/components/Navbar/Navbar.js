// Import dependencies.

import React from "react";
import styles from "./Navbar.module.css";

// Import nested components.

import Button from "../Button/Button";
import Icon from "../Icon/Icon";

// Create and export the component.

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
    <div>
      <Icon/>
      <Button/>
    </div>
  </nav>
 );
}

export default Navbar;
