// Import dependencies.

import React from "react";
import styles from "./Icon.module.css";
import icon from "./icon.png";

// Create and export the component.

const Icon = () => {

  return ( <
    img className={styles.icon} src={icon}
    alt = "Icon" / >
  );
};

export default Icon;
