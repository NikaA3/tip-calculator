import React from "react";
import logo from "../../images/logo.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return <img src={logo} alt="logo" className={styles.header} />;
};

export default Logo;
