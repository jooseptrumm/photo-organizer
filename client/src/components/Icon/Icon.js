// The main app icon component.

// Import dependencies.

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Icon.module.css";
import icon from "./icon.png";

// Create and export the component.

const Icon = () => {

  return (
    <Link className={styles.link} to="/">
    <img className={styles.icon} src={icon}
    alt = "Icon"/>
    </Link>
  );
};

export default Icon;
