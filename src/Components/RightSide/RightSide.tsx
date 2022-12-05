import React from "react";
import Reset from "../Buttons/Reset";
import TotalTip from "./TotalTip/TotalTip";
import styles from "./RightSide.module.css";
import TotalAmount from "./TotalAmount/TotalAmount";

const RightSide = (props: {
  calculation: number;
  total: number;
  enteredBill: string;
  handleReset: () => void;
}) => {
  const { calculation, total, handleReset, enteredBill } = props;

  return (
    <div className={styles.rightSide}>
      <TotalTip calculation={calculation} />
      <TotalAmount total={total} />
      <Reset handleReset={handleReset} enteredBill={enteredBill} />
    </div>
  );
};

export default RightSide;
