import React from "react";
import styles from "./TotalTip.module.css";

const TotalTip = (props: { calculation: number }) => {
  const { calculation } = props;

  const tipFunction = () => {
    if (isNaN(calculation) || calculation === Infinity) {
      return "0.00";
    } else {
      return calculation;
    }
  };

  return (
    <div className={styles.totalTip}>
      <span className={styles.tipAmount}>
        Tip amount<p className={styles.person}>/ person</p>
      </span>
      <span className={styles.numbers}>{tipFunction()}</span>
    </div>
  );
};

export default TotalTip;
