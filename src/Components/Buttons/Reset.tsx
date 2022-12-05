import React from "react";
import styles from "./Reset.module.css";

const Reset = (props: { handleReset: () => void; enteredBill: string }) => {
  const { handleReset, enteredBill } = props;
  return (
    <button
      onClick={handleReset}
      className={enteredBill === "" || 0 ? styles.disabled : styles.reset}
    >
      Resest
    </button>
  );
};

export default Reset;
