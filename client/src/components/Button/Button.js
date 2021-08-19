// The button component.

// Import dependencies.

import React from "react";
import styles from "./Button.module.css";
import logo from "./logo.png";

// Create and export the component.

const Button = () => {

  return (
    <button className={styles.button}>
    <img className={styles.logo} src={logo} alt="Google logo"/>
  Login with Google
  </button>);

};

export default Button;
