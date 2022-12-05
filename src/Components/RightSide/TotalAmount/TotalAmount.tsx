import React from "react";
import styles from "./TotalAmount.module.css";

const TotalAmount = (props: { total: number }) => {
  const { total } = props;

  const testFunction = () => {
    if (isNaN(total) || total === Infinity) {
      return "0.00";
    } else {
      return total;
    }
  };
  console.log(testFunction());
  return (
    <div className={styles.totalAmount}>
      <span className={styles.tipAmount}>
        Total<p className={styles.person}>/ person</p>
      </span>
      <span className={styles.numbers}>{testFunction()}</span>
    </div>
  );
};

export default TotalAmount;
